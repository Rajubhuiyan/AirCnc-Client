import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './MapSide.css'

const MapSide = ({ searchDataFromDb }) => {

    const [latitued, setLatitued] = useState();
    const [long, setLong] = useState();

    // lat lon
    useEffect(() => {
        searchDataFromDb.map(data => setLatitued(data.lat))
        searchDataFromDb.map(data => setLong(data.lon))
    }, [searchDataFromDb])

    const containerStyle = {

        marginBottom: '10px',
        width: '90%',
        height: '80vh'
    };


    const location = {

        lat: latitued,
        lng: long

    };

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <LoadScript
                googleMapsApiKey="AIzaSyCfpecYZ1f_ptFME-5xpmrDuB8NJDB7nIE"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={location}
                    zoom={11}
                >

                    {searchDataFromDb.map(({ _id, lat, lon }) => (
                        <Marker
                            key={_id}
                            position={{ lat: lat, lng: lon }}
                        >
                        </Marker>
                    ))}

                    <> </>
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default MapSide;