import React from 'react';
import SimpleCardForm from './SimpleCardForm/SimpleCardForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const Payment = () => {

    const stripePromise = loadStripe('pk_test_51Jl41xDbiXlp1RLtUKUxRWlUEiufxdyO32ipf5SKgdmpkIU8ofzGLqqUXK1NBOz8uJNsoKkIJS7G98xcGRbVlVqD00DEkkNS46');

    return (
        <div style={{marginTop: '60px'}}>
            <Elements stripe={stripePromise}>
                <SimpleCardForm/>
            </Elements>
        </div>
    );
};

export default Payment;