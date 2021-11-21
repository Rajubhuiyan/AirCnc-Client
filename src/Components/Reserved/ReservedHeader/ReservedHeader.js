import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './ReservedHeader.css'

const ReservedHeader = ({ img }) => {
    return (
        <Box className="reserved-img" sx={{mt: 2}}>
            <Grid display="flex" justifyContent="center" container spacing={5}>
                <Grid item sm={12} md={6} >
                    <img style={{ width: "100%", height: '80vh' }} src={img} alt="" />
                </Grid>
                <Grid item sm={12} md={6}>
                    <img style={{ width: "100%", height: '80vh' }} src={img} alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ReservedHeader;