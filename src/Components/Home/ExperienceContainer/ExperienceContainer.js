import { Card, Grid, Rating } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const ExperienceContainer = ({ exData }) => {

    return (
        <Grid item md={3} lg={3}>
            <Card style={{ border: 'none', maxWidth: '208px', boxShadow: "none"  }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        style={{maxWidth: "208px"}}
                        height="140"
                        image={exData.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <h4>{exData.name}</h4>
                        <p>${exData.price} Per Person</p>
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

export default ExperienceContainer;