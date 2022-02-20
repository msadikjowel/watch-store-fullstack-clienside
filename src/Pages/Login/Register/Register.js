import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Container, TextField, Button, CircularProgress, Alert } from '@mui/material';
import login from '../../../img/login.png'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';

const Register = () => {

    const { registerUser, isLoading, user, authError } = useAuth();

    const [error, setError] = useState(false);

    const [loginData, setLoginData] = useState({})

    const location = useLocation();
    const history = useHistory();

    // handle changed value
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };

    // register
    const handleRegister = e => {

        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            setError(true);
            alert('Password not matched, please try again')
            // return;
        }
        else {
            setError(false);
        }
        registerUser(loginData.name, loginData.email, loginData.password, history, location);
    };

    return (
        <>
            <Header></Header>
            <Container sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant='body1' gutterBottom sx={{ fontWeight: '600', fontSize: '1.3rem' }}>Register</Typography>
                        {!isLoading && <form onSubmit={handleRegister}>

                            <TextField
                                required
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic" label="Your Name"
                                name="name"
                                onChange={handleOnChange}
                                variant="standard" /> <br />

                            <TextField
                                required
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic" label="Your Email"
                                name="email"
                                type="email"
                                onChange={handleOnChange}
                                variant="standard" /> <br />

                            <TextField
                                required
                                sx={{ width: '75%', m: 1 }}
                                name="password"
                                onChange={handleOnChange}
                                id="standard-password-input"
                                label="Password"
                                type="Password"
                                autoComplete="current-password"
                                variant="standard"
                            /> <br />

                            <TextField
                                required
                                sx={{ width: '75%', m: 1 }}
                                name="password2"
                                onChange={handleOnChange}
                                id="standard-password-input"
                                label="Re-type Your Password"
                                type="Password"
                                autoComplete="current-password"
                                variant="standard"
                            /> <br />

                            <Button
                                sx={{ width: '25%', m: 1, backgroundColor: 'rgb(23,23,219)' }}
                                variant="contained" type="submit">Register</Button>

                            <NavLink to='/login' style={{ textDecoration: 'none' }}>
                                <Button
                                    sx={{ width: '75%', m: 1, color: 'rgb(23,23,219)', fontWeight: '500', textTransform: 'capitalize' }}
                                    variant="text" type="submit">Already Registerd? Please Login</Button>
                            </NavLink> <br />


                        </form>} <br />

                        {/* alert message after user state changed */}
                        {isLoading && <CircularProgress />}

                        {user?.email && <Alert severity="success">Registration Successfull !</Alert>}

                        {/* {authError && <Alert severity="error">Registraion failed. Please check your retype password. Password length must be 6 characters long.</Alert>
                        } */}

                        {/* {error && <Alert severity="error">Registraion failed. Please check your retype password. Password length must be 6 characters long.</Alert>
                        } */}


                    </Grid>

                </Grid>
            </Container>
        </>
    );
};

export default Register;