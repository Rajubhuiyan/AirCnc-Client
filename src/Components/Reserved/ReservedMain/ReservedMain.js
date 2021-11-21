import { Container, Grid } from '@mui/material';
import React from 'react';
import ReservedMainLeft from '../ReservedMainLeft/ReservedMainLeft';
import ReservedMainRight from '../ReservedMainRight/ReservedMainRight';

const ReservedMain = ({reserveData}) => {
    return (
        <Container sx={{mt: 4, mb: 4}}>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={6}>
                    <ReservedMainLeft reserveData={reserveData} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <ReservedMainRight reserveData={reserveData} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default ReservedMain;