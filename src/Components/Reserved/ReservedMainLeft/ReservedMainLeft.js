import { Avatar, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import rowdra from '../../../images/47498481-a-portrait-of-a-men-in-studio-gray-background.jpg';
import HomeIcon from '@mui/icons-material/Home';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StarIcon from '@mui/icons-material/Star';


const ReservedMainLeft = ({ reserveData }) => {

    const { loc, bedroom, bed, guest, bath,  rate, } = reserveData;
    return (
        <Box>
            <Box>
                <Grid container style={{ borderBottom: '1px solid lightgrey', padding: '5px' }}>
                    <Grid item md={10}>
                        <Typography sx={{ fontWeight: 500 }} variant="h5">
                            Light Brigth Airy Stylish Apt And Safe Peaceful Stay
                        </Typography>
                        <p>{loc && loc.charAt(0).toUpperCase() + loc.slice(1)}, Bangladesh</p>
                        <p>{guest} Guest, {bedroom} Bedrooms, {bed} Beds, {bath} Baths</p>
                    </Grid>
                    <Grid item md={2}>
                        <Avatar
                            alt="Rowdra"
                            src={rowdra}
                            sx={{ width: 56, height: 56 }}
                        />
                    </Grid>
                </Grid>
            </Box>

            <Box style={{ borderBottom: '1px solid lightgrey', padding: '10px', paddingBottom: '10px' }} sx={{ mt: 5, mb: 4 }}>
                <Grid container style={{ marginBottom: "20px" }} spacing={{ xs: 2, md: 2 }}>
                    <Grid item xs={1} sm={1} md={1}>
                        <HomeIcon sx={{ color: '#686464' }} />
                    </Grid>
                    <Grid item xs={11} sm={11} md={11}>
                        <small style={{ fontSize: '18px', fontWeight: '500', color: "#686464" }}>Entire Home</small> <br />
                        <small style={{ fontSize: '18px', fontWeight: '500', color: "#686464" }}>You'll have condominium to yourself .</small>
                    </Grid>
                </Grid>
                <Grid container style={{ marginBottom: "20px" }} spacing={{ xs: 2, md: 2 }}>
                    <Grid item xs={1} sm={1} md={1}>
                        <CheckBoxIcon sx={{ color: '#686464' }} />
                    </Grid>
                    <Grid item xs={11} sm={11} md={11}>
                        <small style={{ fontSize: '18px', fontWeight: '500', color: "#686464" }}>Self check in</small> <br />
                        <small style={{ fontSize: '18px', fontWeight: '500', color: "#686464" }}>You can check in with the doorman.</small>
                    </Grid>
                </Grid>
                <Grid container style={{ marginBottom: "10px" }} spacing={{ xs: 2, md: 2 }}>
                    <Grid item xs={1} sm={1} md={1}>
                        <CleaningServicesIcon sx={{ color: '#686464' }} />
                    </Grid>
                    <Grid item xs={11} sm={11} md={11}>
                        <small style={{ fontSize: '18px', fontWeight: '500', color: "#686464" }}>Sparking clean</small> <br />
                        <small style={{ fontSize: '18px', fontWeight: '500', color: "#686464" }}>10 recent guests said this place was sparking clean. </small>
                    </Grid>
                </Grid>
                <Grid container style={{ marginBottom: "10px" }} spacing={{ xs: 2, md: 2 }}>
                    <Grid item xs={1} sm={1} md={1}>
                        <PeopleAltIcon sx={{ color: '#686464' }} />
                    </Grid>
                    <Grid item xs={11} sm={11} md={11}>
                        <small style={{ fontSize: '18px', fontWeight: '500', color: "#686464" }}>Rowdra is a Superhost</small> <br />
                        <small style={{ fontSize: '18px', fontWeight: '500', color: "#686464" }}>Superhosts are experienced, highly rated hosts who are commited to providing great stays for guests. </small>
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <p style={{ color: '#686464' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sunt fugit deleniti ipsa dolor aut autem a architecto eius quos blanditiis, corporis minima cumque, repudiandae sint. <br /> Unde itaque vitae, hic deleniti laudantium porro amet blanditiis possimus ratione ad. Deserunt nisi maxime necessitatibus sit possimus? Eum harum adipisci unde! Earum, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vel impedit iste dolores dicta inventore consequuntur voluptates accusamus porro maiores.</p>
            </Box>
            <Box sx={{mt: 3, mb: 3}}>
                <h3>Reviews</h3>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    marginRight: "auto"
                }}>
                    <StarIcon sx={{ color: 'yellowgreen' }} />
                    <span style={{ fontSize: '15px', fontWeight: '400' }}>{rate}</span>
                </div>
            </Box>


        </Box>
    );
};

export default ReservedMainLeft;