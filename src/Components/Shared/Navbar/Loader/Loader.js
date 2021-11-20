import React from 'react';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
const Loader = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="30vh"
            minWidth="100%"
        >
            <CircularProgress/>
        </Box>
    );
};

export default Loader;