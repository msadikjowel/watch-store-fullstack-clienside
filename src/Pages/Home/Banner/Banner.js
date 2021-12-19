import { Grid, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import React from 'react';
import bg from './../../../img/bg.png'
import './Banner.css'
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <Box id='banner' sx={{ flexGrow: 1, minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#F7F7F7', py: 5 }}>
            <Container>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} md={5} >
                        <Typography variant='p' sx={{ fontWeight: '500', fontSize: '14px', color: 'rgb(23,23,219)' }}>
                            YOUR WATCH YOUR STYLE
                        </Typography>
                        <Typography variant='h2' sx={{ fontWeight: '700', mb: 1, }} id='bannerTitle'>
                            HAVE YOU EVER WORN A REAL WATCH
                        </Typography>
                        <Typography variant='p'>
                            The styles of watches available to consumers are endless and profit is also endless if you are a fashion geek and have the guts to sort out needs related to.
                        </Typography> <br />
                        <NavLink to='/allServices' style={{ textDecoration: 'none' }}>
                            <Button variant="contained" sx={{ mt: 2, backgroundColor: 'rgb(23,23,219)' }}>EXPLORE MORE</Button>
                        </NavLink>
                    </Grid>
                    <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ width: '100%' }} src={bg} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;