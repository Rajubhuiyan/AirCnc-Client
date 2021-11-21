import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import './ReservedMainRight.css';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router';
const ReservedMainRight = ({ reserveData }) => {


    

    const navigate = useNavigate();
    const { searchData } = useAuth();
    const { fromDate, toDate } = searchData;
    const {  price, rate } = reserveData;

    const [totalNight, setTotalNight] = useState(1)


    if (fromDate === undefined) {
        navigate("/")
    }

    const cleaningFee = 10;
    const serviceFee = 21;

    let newPrice = price;



    useEffect(() => {
        if (fromDate !== undefined) {
            const getTime = toDate.getDate() - fromDate.getDate();
            if (getTime > 1) {
                setTotalNight(getTime)
            }
        }
    }, [fromDate, toDate, totalNight])

    if (totalNight > 0) {
        newPrice = newPrice * totalNight
    }

    const totalPrice = cleaningFee + serviceFee + newPrice;




    return (
        <Box>
            <Card sx={{ minWidth: 275 }}>
                <Box>
                    <CardContent>

                        <Box>
                            <Typography variant="h5" gutterBottom>
                                <span style={{ fontWeight: 'bold' }}>${price}</span> /night
                            </Typography>
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                marginRight: "auto",

                            }}>
                                <StarIcon sx={{ color: 'yellowgreen' }} />
                                <span style={{ fontSize: '15px', fontWeight: '400' }}>{rate}</span>
                            </div>
                        </Box>


                        <Box>
                            <Typography variant="body.2">
                                Dates
                            </Typography>
                            <div className="dates-container">
                                <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingLeft: '20px' }}>
                                    <h3>{fromDate && fromDate.toLocaleDateString()}</h3>
                                    <h3>→</h3>
                                    <h3>{toDate && toDate.toLocaleDateString()}</h3>
                                </div>
                            </div>
                        </Box>
                        <Box>
                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingLeft: '20px', borderBottom: '1px solid lightgrey' }}>
                                <p>${price} X {totalNight} nights</p>
                                <p>${newPrice}</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingLeft: '20px', borderBottom: '1px solid lightgrey' }}>
                                <p>Cleaning Fee</p>
                                <p>${cleaningFee}</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingLeft: '20px', borderBottom: '1px solid lightgrey' }}>
                                <p>Service Fee</p>
                                <p>${serviceFee}</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingLeft: '20px', borderBottom: '1px solid lightgrey' }}>
                                <h3>Total</h3>
                                <h3>${totalPrice}</h3>
                            </div>
                        </Box>


                    </CardContent>
                    <CardActions>
                        <Button className="reserve-button">Reserve</Button>
                    </CardActions>
                    <p style={{ textAlign: 'center', marginTop: '-4px', color: '#acacac' }}>You won't be changed yet</p>
                </Box>
            </Card>
        </Box>
    );
};

export default ReservedMainRight;