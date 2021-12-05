import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Button } from '@mui/material';
import { Link,} from 'react-router-dom';
const PaymentSucces = () => {
    const { payment } = useAuth();


    const [isPaymentSuccess, setIsPaymentSuccess] =useState(false);

    useEffect(() => {
        fetch('https://aircnc00.herokuapp.com/savePaymentToDb', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payment)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setIsPaymentSuccess(true)
                }
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        
        if (isPaymentSuccess === true) {
            fetch(`http://localhost:5000/isPaymentSuccess/${payment.reserveInfo._id}`, {
                method: 'PUT',
                headers: { 'content-Type': 'application/json'}
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
        }

    }, [isPaymentSuccess])


    return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{}}>
                <h1 style={{ textTransform: 'uppercase' }}>Payment {payment.status}</h1>

                <Link style={{ textDecoration: "none" }} to="/"><Button style={{ width: '300px' }} className="reserve-button">Click Here To Go Home</Button></Link>
            </div>
        </div>
    );
};

export default PaymentSucces;