import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Loader from '../../Shared/Navbar/Loader/Loader';
import MapSide from '../MapSide/MapSide';
import SearchCategories from '../SearchCategories/SearchCategories';
import {  useParams } from 'react-router';


const SearchMain = () => {


    const { searchData } = useAuth();
    const {searchLoc} = useParams();

    const [searchDataFromDb, setSearchDataFromDb] = useState([]);
    const [check, setCheck] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://aircnc00.herokuapp.com/getBySearch/${searchLoc}`)
            .then(res => res.json())
            .then(data => {
                setSearchDataFromDb(data)
                if (data !== '') {
                    setCheck(data[0]);
                }
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [searchLoc])


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