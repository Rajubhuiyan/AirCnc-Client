import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Loader from '../../Shared/Navbar/Loader/Loader';
import MapSide from '../MapSide/MapSide';
import SearchCategories from '../SearchCategories/SearchCategories';

const SearchMain = () => {

    const navigate = useNavigate()

    const { searchData } = useAuth();

    const load = window.onloadstart;
    const [searchDataFromDb, setSearchDataFromDb] = useState([]);
    const [check, setCheck] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://aircnc00.herokuapp.com/getBySearch/${searchData.searchCity}`)
            .then(res => res.json())
            .then(data => {
                setSearchDataFromDb(data)
                if (data !== '') {
                    setCheck(data[0])
                }
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [searchData, load])

    
    if (searchData.searchCity === undefined && check === undefined) {
        navigate("/")
    }

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                {
                   isLoading === true ? <Loader/> : check ? <h3 style={{ textTransform: 'uppercase', marginLeft: '20px' }}>Search Result For {check.loc}</h3> : <h3 style={{ textTransform: 'uppercase', marginLeft: '20px' }}>{searchData.searchCity} Not Founded</h3>
                }
                <Grid container>
                    {isLoading ? <Loader/> :  searchDataFromDb.map(sd => <SearchCategories key={sd._id} sd={sd} />)}
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                {
                    check !== undefined && <MapSide searchDataFromDb={searchDataFromDb} />
                }
            </Grid>
        </Grid>
    );
};

export default SearchMain;