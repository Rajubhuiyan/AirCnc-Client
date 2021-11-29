import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer';
import HomesConainer from '../HomesContainer/HomesConainer';
import Loader from '../../Shared/Navbar/Loader/Loader';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from "react-router-dom";
import './Header.css'

const Header = () => {



    const [arrivalValue, setArrivalValue] = useState(new Date());
    const [departureValue, setDepartureValue] = useState(new Date());

    const [adult, setAdult] = useState(3);
    const [baby, setBaby] = useState(0);
    const [child, setChild] = useState(2);
    const [experienceData, setExperienceData] = useState([]);
    const [homesData, setHomesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [location, setLocation] = useState('Dhaka');
    const { setSearchData, } = useAuth();

    const navigate = useNavigate();


    const handleLocationValue = (e) => {
        if (e.target.value) {
            setLocation(e.target.value);
        }
    };

    const handleSearchData = () => {
        setSearchData({
            searchCity: location,
            fromDate: arrivalValue,
            toDate: departureValue,
            adult: adult,
            baby: baby,
            child: child,
        })
        navigate("/serched/")

    }


    useEffect(() => {
        fetch('https://aircnc00.herokuapp.com/getHotels')
            .then(res => res.json())
            .then(data => {
                const spliceData = data.splice(0, 4);

                setExperienceData(spliceData)
                const homesData = data.splice(0, 3);
                setHomesData(homesData);
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, []);





    return (
        <div >
            <Grid container spacing={2}>
                <Grid className="slider-container" sx={{ mx: 7 }} item xs={12} md={3}>
                    <Typography sx={{ mt: 5 }} variant="h6">Where Do You Want To Go</Typography>
                    <Grid container>
                        <Grid item xs={10} md={12}>
                            <Card style={{ boxShadow: "1px 1px 8px lightgrey" }} sx={{ maxHeight: 60, minWidth: 200, mt: 5, pb: 4 }}>
                                <CardContent>
                                    <Typography variant="h6">
                                        Location
                                    </Typography>
                                    <TextField onBlur={handleLocationValue} placeholder="Enter City Name" variant="standard" />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid container sx={{ mb: 5 }} spacing={3}>
                        <Grid scx="true" item xs={12} sm={6} md={6} lg={6}>
                            <Card className="date-container" style={{ boxShadow: "1px 1px 8px lightgrey" }}>
                                <CardContent >


                                    <LocalizationProvider className="date-content" dateAdapter={AdapterDateFns}>
                                        <Stack spacing={3}>
                                            <DatePicker
                                                disablePast
                                                openTo="year"
                                                value={arrivalValue}
                                                onChange={(newValue) => {
                                                    newValue && setArrivalValue(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} label="Arrival" />}
                                            />
                                        </Stack>
                                    </LocalizationProvider>


                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Card className="date-container" style={{ boxShadow: "1px 1px 8px lightgrey" }}>
                                <CardContent>


                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Stack spacing={3}>
                                            <DatePicker
                                                disablePast
                                                openTo="year"
                                                value={departureValue}
                                                onChange={(newValue) => {
                                                    newValue && setDepartureValue(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} label="Departure" />}
                                            />
                                        </Stack>
                                    </LocalizationProvider>

                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>


                    <Grid container>
                        <Grid item xs={10} sm={11} md={12} lg={12}>
                            <Accordion style={{ boxShadow: "1px 1px 8px lightgrey" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ fontWeight: 'bold' }}>{adult} Adults, {child} Child</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container>
                                        <Grid item xs={8} md={8}>
                                            <Typography sx={{ fontWeight: 'bold' }}>
                                                Adults
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} md={4}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={6} md={5}>
                                                    <AddIcon onClick={() => setAdult(adult + 1)} style={{ cursor: 'pointer' }} />
                                                </Grid>
                                                <Grid item xs={3} md={4}>
                                                    <small style={{ fontSize: '20px', fontWeight: 'bold' }}>{adult}</small>
                                                </Grid>
                                                <Grid item xs={3} md={3}>
                                                    <RemoveIcon onClick={() => adult > 1 ? setAdult(adult - 1) : 0} style={{ cursor: 'pointer' }} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid container sx={{ mt: 5 }}>
                                        <Grid item xs={8} md={8}>
                                            <Typography sx={{ fontWeight: 'bold' }}>
                                                Child
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} md={4}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={6} md={5}>
                                                    <AddIcon onClick={() => setChild(child + 1)} style={{ cursor: 'pointer' }} />
                                                </Grid>
                                                <Grid item xs={3} md={4}>
                                                    <small style={{ fontSize: '20px', fontWeight: 'bold' }}>{child}</small>
                                                </Grid>
                                                <Grid item xs={3} md={3}>
                                                    <RemoveIcon onClick={() => child > 0 ? setChild(child - 1) : 0} style={{ cursor: 'pointer' }} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid container sx={{ mt: 5 }}>
                                        <Grid item xs={8} md={8}>
                                            <Typography sx={{ fontWeight: 'bold', }}>
                                                Babies
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} md={4}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={6} md={5}>
                                                    <AddIcon onClick={() => setBaby(baby + 1)} style={{ cursor: 'pointer' }} />
                                                </Grid>
                                                <Grid item xs={3} md={4}>
                                                    <small style={{ fontSize: '20px', fontWeight: 'bold' }}>{baby}</small>
                                                </Grid>
                                                <Grid item xs={3} md={3}>
                                                    <RemoveIcon onClick={() => baby > 0 ? setBaby(baby - 1) : 0} style={{ cursor: 'pointer' }} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Button className="reserve-button" onClick={handleSearchData} sx={{ mt: 3 }}>Search</Button>
                    </Grid>

                </Grid>
                <Grid item style={{ marginTop: '20px', marginLeft: '2vw', marginBottom : '20px' }} xs={12} md={7}>
                    <h4>Experiences</h4>
                    <Grid container spacing={2}>
                        {
                            isLoading ? <Loader /> :
                                experienceData.map(exData => <ExperienceContainer key={exData._id} exData={exData} />)
                        }
                    </Grid>
                    <h4>Homes</h4>
                    <Grid container spacing={2}>
                        {
                            isLoading ? <Loader /> :
                                homesData.map(home => <HomesConainer key={home._id} home={home} />)
                        }
                    </Grid>

                </Grid>
            </Grid>
        </div>
    );
};

export default Header;