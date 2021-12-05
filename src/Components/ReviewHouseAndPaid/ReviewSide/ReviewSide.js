import {  Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router';
const ReviewSide = () => {


    const navigate = useNavigate();
    const {  reserveInfo } = useAuth();
    if (reserveInfo.fromDate === undefined) {
        navigate("/")
    }

    const cleaningFee = 10;
    const serviceFee = 21;

    return (
        <Box>
            <Card sx={{ minWidth: 275 }}>
                <Box>
                    <CardContent>

                        <Box>
                            <Typography variant="h5" gutterBottom>
                                <span style={{ fontWeight: 'bold' }}>${reserveInfo.perDayPrice}</span> /night
                            </Typography>
                        </Box>

                        <Box>
                            <Typography variant="body.2">
                                Dates
                            </Typography>
                            <div className="dates-container">
                                <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingLeft: '20px' }}>
                                    <h3>{reserveInfo.fromDate}</h3>
                                    <h3>→</h3>
                                    <h3>{reserveInfo.toDate}</h3>
                                </div>
                            </div>
                        </Box>
                        <Box>
                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingLeft: '20px', borderBottom: '1px solid lightgrey' }}>
                                <p>${reserveInfo.perDayPrice} X {reserveInfo.totalNight} nights</p>
                                <p>${reserveInfo.perDayPrice * reserveInfo.totalNight}</p>
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
                                <h3>${reserveInfo.totalPrice}</h3>
                            </div>
                        </Box>


                    </CardContent>
                </Box>
            </Card>
        </Box>
    );
};

export default ReviewSide;