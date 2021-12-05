import React from 'react';
import pet from '../../../images/ic_pets_48px.png';
import children from '../../../images/ic_child_friendly_48px.png';
import noparty from '../../../images/forbidden.png';
import smoking from '../../../images/ic_smoking_rooms_48px.png'
import { Button } from '@mui/material';


const HouseRules = ({ isReview, isHouseRule, reserveData }) => {


    const { location, fromDate, toDate, totalNight } = reserveData.reservedInfo;
    // loc && loc.charAt(0).toUpperCase() + loc.slice(1)
    return (
        <div>
            {
                location && <div>
                    <div style={{ borderBottom: '1px solid #d6acac', paddingBottom: '20px' }}>
                        <h1>Reviews House Rules</h1>
                        <h3>{totalNight} nights in {location && location.charAt(0).toUpperCase() + location.slice(1)}</h3>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '1vw', marginRight: '1vw' }}>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ background: 'lightgrey', padding: '10px', fontWeight: 'bold', }}>{FormData && fromDate.split("/")[1]} </p>
                                    <p style={{ marginLeft: '20px', }}><span>Check In <br /> After 12 PM</span></p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ background: 'lightgrey', padding: '10px', fontWeight: 'bold', }}>{toDate && toDate.split("/")[1]} </p>
                                    <p style={{ marginLeft: '20px', }}><span>Check Out <br /> After 11 AM</span></p>
                                </div>
                            </div>
                            <div style={{ marginTop: '5vh', color: '#606060' }}>
                                <small>Self Check In with Building stuff</small>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2>Things Keep In Mind</h2>
                        <div style={{ display: 'flex', }}>
                            <div style={{ marginRight: '5px' }}>
                                <img width="20px" style={{ marginTop: '17px' }} src={children} alt="" />
                            </div>
                            <div>
                                <p>Suitable for children.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', }}>
                            <div style={{ marginRight: '5px' }}>
                                <img width="20px" style={{ marginTop: '17px' }} src={pet} alt="" />
                            </div>
                            <div>
                                <p>Pets Allowed</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', }}>
                            <div style={{ marginRight: '5px' }}>
                                <img width="20px" style={{ marginTop: '17px' }} src={noparty} alt="" />
                            </div>
                            <div>
                                <p>No parties and event</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', }}>
                            <div style={{ marginRight: '5px' }}>
                                <img width="20px" style={{ marginTop: '17px' }} src={smoking} alt="" />
                            </div>
                            <div>
                                <p>Smoking Allowed</p>
                            </div>
                        </div>
                    </div>
                    <Button onClick={() => { isHouseRule(false); isReview(true) }} className="reserve-button">Agree And Continue</Button>
                </div>
            }
        </div>
    );
};

export default HouseRules;