import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import SecondNav from '../../Shared/SecondNav/SecondNav';

const ReservedContainer = () => {
    const {reserveId} = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/getByReserved/${reserveId}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [reserveId])


    return (
        <div>
            <SecondNav/>
        </div>
    );
};

export default ReservedContainer;