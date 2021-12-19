import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router';
import Loader from '../../Shared/Navbar/Loader/Loader';
import SecondNav from '../../Shared/SecondNav/SecondNav';
import ReservedHeader from '../ReservedHeader/ReservedHeader';
import ReservedMain from '../ReservedMain/ReservedMain';

const ReservedContainer = () => {
    const [reserveData, setReserveData] = useState({});
    const [isLoading, setIsLoading ] = useState(true);
    const { reserveId } = useParams();

    const load = window.onloadstart;


    


    useEffect(() => {
        fetch(`https://aircnc00.herokuapp.com/getByReserved/${reserveId}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setReserveData(data);
                    setIsLoading(false);
                }
            })
            .catch(err => console.error(err))
    }, [reserveId, load, isLoading, setIsLoading]);


    return (
        <div>
            {
                isLoading ? <Loader /> 
                : 
                <div>
                    <SecondNav />
                    <ReservedHeader img={reserveData.img} />
                    <ReservedMain reserveData={reserveData} />
                </div>
            }
        </div>
    );
};

export default ReservedContainer;