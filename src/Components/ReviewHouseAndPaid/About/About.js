import { Avatar, Button, TextField } from '@mui/material';
import React from 'react';
import rowdra from '../../../images/47498481-a-portrait-of-a-men-in-studio-gray-background.jpg'
const About = ({ isReview, isPayment }) => {
    return (
        <div>
            <div>
                <h3>Traveling For Word</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Say hello To Your Host <br /> Let Rowdra know a title about your self and why You are Coming </p>
                <Avatar
                    alt="Rowdra"
                    src={rowdra}
                    sx={{ width: 56, height: 56 }}
                />
            </div>
            <div>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    sx={{ width: '50%'}}
                    rows={4}
                    placeholder="Hlw Rowdra!"
                />
            </div>
            <Button className="reserve-button"style={{width: '35%', marginTop: '20px'}} onClick={() => { isReview(false); isPayment(true) }}>Continue</Button>
        </div>
    );
};

export default About;