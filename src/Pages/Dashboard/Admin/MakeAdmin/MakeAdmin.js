import { TextField, Button, Alert } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    // all state
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false);


    // onBlur function
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    // make admin function
    const handleMakeAdmin = e => {

        const user = { email }

        fetch('https://radiant-brook-77884.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setAdminSuccess(true);
                }
            })

        e.preventDefault();
    };


    return (
        <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto', alignItems: 'center' }}>
            <h2>Make an admin</h2>
            <form onSubmit={handleMakeAdmin}>
                <TextField
                    onBlur={handleOnBlur}
                    required
                    type="email"
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    sx={{ m: 2, width: '50%' }}
                /> <br />


                <Button
                    variant="contained"
                    style={{ border: 'none', background: 'rgb(23,23,219)', textTransform: 'capitalize' }}
                    type="submit"
                > Make Admin </Button> <br />

                {adminSuccess && <Alert severity="success">Admin successfully made !</Alert>}
            </form>

        </div>
    );
};

export default MakeAdmin;