import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Shared/Header/Header';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Alert, TextField, Typography, Button } from '@mui/material';
import './Purchase.css'
import Footer from '../Shared/Footer/Footer';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Purchase = () => {
    // all state
    const { user } = useAuth();
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [purchased, setPurchased] = useState(false)
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    useEffect(() => {
        fetch(`https://radiant-brook-77884.herokuapp.com/purchase/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                reset(data);
            })
    }, [id, reset]);

    // react hook form

    const onSubmit = data => {

        delete data._id;
        data.status = 'pending';

        fetch('https://radiant-brook-77884.herokuapp.com/purchased', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

                setPurchased(true);
                // alert('Purchased successfully!')
                reset();


            })
    };


    return (
        <>
            <Header></Header>
            <Container>
                <h2 className='purchaseTitle'>Confirm Your Purchase for <span>{product?.name}</span> </h2>

                <Box sx={{ flexGrow: 1, mt: 8 }}>
                    <Grid container spacing={2} sx={{ padding: 1 }}>

                        <Grid item xs={12} md={6}>
                            <LazyLoadImage style={{ width: '50%', margin: 'auto', display: 'flex' }} src={product?.img} alt="Timex watch" /> <br />

                            <Typography variant="h6" sx={{ fontWeight: '600' }}>
                                Price: <span className='price'>${product?.price}</span>
                            </Typography> <br />

                            <Typography variant="p" sx={{ pt: 2 }}>
                                {product?.longDesc}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', margin: 'auto', alignItems: 'center' }}>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <h4>Billing Information</h4>

                                <TextField
                                    value={user?.email}
                                    id="standard-basic" label="Email" variant="standard"
                                    {...register("email", { required: true })} type="email"
                                    sx={{ m: 1, width: '75%' }}
                                />




                                <TextField
                                    required
                                    value={user?.displayName}
                                    id="standard-required" label="Your Name" variant="standard"
                                    {...register("userName")}
                                    type="text"
                                    sx={{ m: 1, width: '75%' }} /> <br />


                                <TextField
                                    required
                                    id="standard-required" label="Your Phone" variant="standard"
                                    {...register("phone", { required: true })}
                                    type="number"
                                    sx={{ m: 1, width: '75%' }}
                                /> <br />

                                <TextField
                                    required
                                    id="standard-required" label="Shipping Address" variant="standard"
                                    {...register("address", { required: true })}
                                    sx={{ m: 1, width: '75%' }}
                                /> <br />



                                {(errors.name || errors.phone) && <span>This field is required</span>} <br />

                                <input className="formBtn" type="submit" value="Proceed to Buy" /> <br />


                                {/* success alert after purchased */}
                                {purchased && <Alert severity="success">Purchased Successfully! Please go to Dashboard to pay and confirm purchase. </Alert>}
                            </form>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Purchase;