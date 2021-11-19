import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import MapSide from '../MapSide/MapSide';
import SearchCategories from '../SearchCategories/SearchCategories';

const SearchMain = () => {

    const { searchData } = useAuth();

    const [searchDataFromDb, setSearchDataFromDb] = useState([])
    const [check, setCheck] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/getBySearch/${searchData.searchCity}`)
            .then(res => res.json())
            .then(data => {
                setSearchDataFromDb(data)
                if (data !== '') {
                    setCheck(data[0])
                }
            })
    }, [searchData])



    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                {
                    check ? <h3 style={{ textTransform: 'uppercase', marginLeft: '20px'}}>Search Result For {check.loc}</h3> : <h3 style={{ textTransform: 'uppercase', marginLeft: '20px' }}>{searchData.searchCity} Not Founded</h3>
                }
                {
                    searchDataFromDb.map(sd => <SearchCategories sd={sd} />)
                }
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <MapSide />
            </Grid>
        </Grid>
    );
};

export default SearchMain;