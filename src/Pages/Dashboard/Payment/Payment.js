import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Jw0TWAVZJhVz0zMve3JyUx8XBF8ynxHE3tQeNCW9BmNB5rnAe847fTvFl9nqL8IhP9dgP45YkMg1GrChvYrLg9w000kZKJk5F')

const Payment = () => {
    const { payId } = useParams()
    const [payment, setPayment] = useState();
    useEffect(() => {
        fetch(`https://radiant-brook-77884.herokuapp.com/payment/${payId}`)
            .then(res => res.json())
            .then(data => setPayment(data));
    }, [payId])
    return (
        <div>
            <h2 style={{ textAlign: 'center', fontWeight: '600', margin: '3rem 0' }}>Please pay for <span style={{ color: 'rgb(23,23,219)' }}>{payment?.name}</span></h2>

            {payment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    price={payment?.price}
                    _id={payment?._id}
                />
            </Elements>}
        </div>
    );
};

export default Payment;