import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Container, TextField, Button, CircularProgress, Alert } from '@mui/material';
import login from '../../../img/login.png'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';


const Login = () => {

    // all state
    const [loginData, setLoginData] = useState({})

    const { user, loginUser, isLoading, authError } = useAuth();

    // for redirect login page to user's desired page
    const location = useLocation();
    const history = useHistory();

    // handle on change value
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };

    // handle login 
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, history, location);
        e.preventDefault();
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
                        <Typography variant='body1' gutterBottom sx={{ fontWeight: '600', fontSize: '1.3rem' }}>Login</Typography>

                        {!isLoading && <form onSubmit={handleLogin}>

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic" label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" /> <br />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                name="password"
                                onChange={handleOnChange}
                                id="standard-password-input"
                                label="Password"
                                type="Password"
                                autoComplete="current-password"
                                variant="standard"
                            /> <br />



                            <Button
                                sx={{ width: '25%', m: 1, backgroundColor: 'rgb(23,23,219)' }}
                                variant="contained" type="submit">Login</Button>

                            <NavLink to='/register' style={{ textDecoration: 'none' }}>
                                <Button
                                    sx={{ width: '75%', m: 1, color: 'rgb(23,23,219)', fontWeight: '500', textTransform: 'capitalize' }}
                                    variant="text" type="submit">New User? Please Register</Button>
                            </NavLink> <br />

                        </form>}
                        <br />

                        {/* alert message after user state changed */}
                        {isLoading && <CircularProgress />}

                        {user?.email && <Alert severity="success">Login Successfull !</Alert>}

                        {authError && <Alert severity="error">{authError}</Alert>
                        }
                    </Grid>

                </Grid>
            </Container>
        </>
    );
};


export default Login;