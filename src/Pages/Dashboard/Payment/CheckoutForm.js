import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Alert, Button, CircularProgress } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const CheckoutForm = ({ price, _id }) => {
    console.log(_id)
    // const { price } = price;
    const { user } = useAuth();
    const stripe = useStripe();

    const elements = useElements();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);

    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch(`https://radiant-brook-77884.herokuapp.com/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        setProcessing(true);
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
            setSuccess('');
        }
        else {
            setError('');
            console.log(paymentMethod);
        }

        // payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.name,
                        email: user?.email
                    },
                },



            },
        );

        if (intentError) {
            setError(intentError.message);
            setSuccess('');
        }
        else {
            setError('')
            setSuccess('Your payment processed successfully.');
            setProcessing(false);
            console.log(paymentIntent)
            // save to database
            const payment = {
                amount: paymentIntent.amount,
                transaction: paymentIntent.client_secret.slice('_secret')[0],
                created: paymentIntent.created,
                last4: paymentMethod.card.last4
            }
            const url = `https://radiant-brook-77884.herokuapp.com/payment/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }

    }
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    {/* <button type="submit" disabled={!stripe}>
                    Pay {price}
                </button> */}

                    {processing ? <CircularProgress /> : <Button type="submit" disabled={!stripe || success} variant="contained" sx={{ mt: 2, backgroundColor: 'rgb(23,23,219)' }}>Pay ${price}</Button>}
                </form> <br />


            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                {
                    error && <Alert variant="filled" severity="error">
                        {error}</Alert>
                }
                {
                    success && <Alert variant="filled" severity="success">
                        {success}
                    </Alert>
                }
            </div>
        </>
    );
};

export default CheckoutForm;