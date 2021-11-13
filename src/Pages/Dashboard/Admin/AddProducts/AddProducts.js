import { Alert, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";



const AddProducts = () => {
    const [addProduct, setAddProduct] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // react hook form

    const onSubmit = data => {


        fetch('https://radiant-brook-77884.herokuapp.com/addProduct', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

                setAddProduct(true);
                // alert('Purchased successfully!')
                reset();


            })
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontWeight: '600', margin: '3rem 0' }}>Add product</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <h4>Product Information</h4>

                <TextField
                    required
                    id="standard-basic" label="Product Name" variant="standard"
                    {...register("name", { required: true })} type="text"
                    sx={{ m: 1, width: '75%' }}
                />




                <TextField
                    required
                    id="standard-required" label="Price $" variant="standard"
                    {...register("price")}
                    type="number"
                    sx={{ m: 1, width: '75%' }} /> <br />


                <TextField
                    required
                    id="standard-required" label="Image URL" variant="standard"
                    {...register("img", { required: true })}
                    type="text"
                    sx={{ m: 1, width: '75%' }}
                /> <br />

                <TextField
                    required
                    id="standard-required" label="Short Description" variant="standard"
                    {...register("shortDesc", { required: true })}
                    sx={{ m: 1, width: '75%' }}
                /> <br />

                <TextField
                    required
                    id="standard-required" label="Full Description" variant="standard"
                    {...register("longDesc", { required: true })}
                    sx={{ m: 1, width: '75%' }}
                /> <br />



                {(errors.name || errors.phone) && <span>This field is required</span>} <br />

                <input className="formBtn" type="submit" value="Add Product" /> <br />


                {/* success alert after purchased */}
                {addProduct && <Alert severity="success">Product Added Successfully ! </Alert>}
            </form>
        </div>
    );
};

export default AddProducts;