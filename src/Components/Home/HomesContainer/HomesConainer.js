import { Card, CardActionArea, CardContent, CardMedia, Grid, Rating } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const HomesConainer = ({home}) => {

    return (
        <Grid item sx={12} md={4} lg={4}>
            <Card style={{ border: 'none', minWidth: "283px",boxShadow: "none" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={home.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <h4>{home.name}</h4>
                        <p>${home.price} Per Person</p>
                        <small>
                            <Rating
                                name="text-feedback"
                                value={4}
                                readOnly
                                precision={0.2}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                        </small>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default HomesConainer;