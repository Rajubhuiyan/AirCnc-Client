import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import HouseRules from '../../HouseRules/HouseRules';
import { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import About from '../../About/About';
import Payment from '../../Payment/Payment';
import ReviewSide from '../../ReviewSide/ReviewSide';
import Loader from '../../../Shared/Navbar/Loader/Loader';

const ReviewHouseAndPaidContainer = () => {

    const [reserveData, setReserveData] = useState({});
    const [houseRule, isHouseRule] = useState(true);
    const [riview, isReview] = useState(false);
    const [payment, isPayment] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const {setReserveInfo} = useAuth();
    const { user } = useAuth();


    useEffect(() => {
        fetch(`http://localhost:5000/getReserveData?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                const lastElement = data[data.length - 1];
                setReserveData(lastElement.reservedInfo);
                setReserveInfo(lastElement.reservedInfo)
                setIsLoading(false);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <Container style={{ height: '100vh', alignItems: 'center', display: 'flex' }}>
            {
                isLoading ? <Loader /> :
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box ><h3 style={{ fontWeight: '400', }}> <span>1. Reviews House Rules {'>'} </span> <span> 2. Who Is Coming {'>'}</span> <span> 3. Confirm And Pay </span> </h3></Box>
                            <Box>
                                {
                                    houseRule && <HouseRules isReview={isReview} isHouseRule={isHouseRule} reserveData={reserveData}></HouseRules>
                                }
                                {
                                    riview && <About isReview={isReview} isPayment={isPayment} reserveData={reserveData}></About>
                                }
                                {
                                    payment && <Payment reserveData={reserveData}></Payment>
                                }
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <ReviewSide />
                        </Grid>
                    </Grid>
            }

        </Container>
    );
};

export default ReviewHouseAndPaidContainer;