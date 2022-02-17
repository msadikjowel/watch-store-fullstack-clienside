import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import { Container } from 'react-bootstrap';

const WatchVideo = () => {
    return (
        <Box sx={{ width: '100%', my: 15 }}>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item lg={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mb: 5 }}>
                        <Typography variant='h2' sx={{ mb: 3, fontWeight: '600', fontSize: '40px' }}>
                            The best watch for your best time.
                        </Typography>
                        <Typography>
                            Since the watch is such a popular fashion accessory and is seen as an essential wardrobe piece for both men and women.
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ margin: 'auto', height: '75vh' }}>
                        <ReactPlayer width="100%" height="75vh" sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }} controls url='https://youtu.be/s9bnEUQRY2U' />


                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default WatchVideo;