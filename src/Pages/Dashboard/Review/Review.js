import { TextField, Button, Alert } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';


const Review = () => {

    const { user } = useAuth();
    const [reviewSuccess, setReviewSucces] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/postReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                setReviewSucces(true);
                reset();
            })
    };

    return (
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', margin: 'auto', alignItems: 'center' }}>
            <h2 style={{ fontWeight: '600' }}>Please write a review</h2>
            <p>Your review helps us to improve our feature and functionality.</p>

            <form onSubmit={handleSubmit(onSubmit)} sx={{ border: '1px solid red', textAlign: 'center' }}>

                <TextField
                    required
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value={user.email}
                    {...register("email")}
                    sx={{ m: 2, width: '75%' }}
                /> <br />

                <TextField
                    required
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    value={user?.displayName}
                    {...register("name")}
                    sx={{ m: 2, width: '75%' }}
                /> <br />

                <TextField
                    required
                    id="outlined-basic"
                    label="Your Image URL"
                    variant="outlined"
                    {...register("img")}
                    sx={{ m: 2, width: '75%' }}
                /> <br />

                <TextField
                    required
                    id="outlined-multiline-flexible"
                    label="Your Comments"
                    multiline
                    maxRows={6}
                    {...register("comments")}
                    sx={{ m: 2, width: '75%' }}
                /> <br />





                {errors.exampleRequired && <span>This field is required</span>} <br />

                <Button type="submit" variant="contained" sx={{ background: 'rgb(23,23,219)' }} >Post Review</Button> <br />

                {reviewSuccess && <Alert severity="success">Your review was posted. Thank you for your review. </Alert>}
            </form>
        </div>
    );
};

export default Review;