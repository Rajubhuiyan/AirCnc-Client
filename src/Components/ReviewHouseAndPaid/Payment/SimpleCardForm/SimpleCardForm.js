import { Button } from '@mui/material';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const SimpleCardForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { setPayment, user, reserveInfo} = useAuth()
    const navigate = useNavigate()

    const [paymentError, setPaymentError] = useState('');

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message)
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
            setPaymentError('Payment Succesfully');
            setPayment({user: user.email, card: paymentMethod.card, status: 'success', reserveInfo: reserveInfo })
            navigate("/paymentSuccess")
        }
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '500px', border: '1px solid black', padding: '70px'}}>
                <div >
                    <form onSubmit={handleSubmit}>
                        <CardElement />
                        <Button sx={{mt: 7}} className="reserve-button" type="submit" disabled={!stripe}>
                            Pay
                        </Button>
                    </form>
                    {
                        paymentError && <h2 style={{ color: 'red' }}>{paymentError}</h2>
                    }
                </div>
            </div>
        </div>
    );
};

export default SimpleCardForm;