import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';
import './HomeServices.css'
import { NavLink } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const HomeServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch('https://radiant-brook-77884.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(true);
            });
    }, [])
    return (
        <Container>
            <h2 className='productsTitle'>WATCHES</h2>
            {loading ?
                <div className="services-container container">
                    {
                        services.map(service => <div
                            key={service._id}
                            className="carts">
                            <div className="cart">
                                <div className="cart-img">
                                    <LazyLoadImage effect='blur' className='img-fluid' src={service?.img} alt="watch image" placeholderSrc={process.env.PUBLIC_URL + '/logo192.png'} />

                                </div>
                                <div className="cart-text">
                                    <p>$ {service.price}</p>
                                    <h2>{service.name}</h2>
                                    <p id="desc">{service.shortDesc}</p>

                                    <NavLink to={`/purchase/${service._id}`} style={{ textDecoration: "none" }}>
                                        <Button variant="contained" sx={{ mt: 2, backgroundColor: 'rgb(23,23,219)' }}>BUY NOW</Button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>)
                    }
                    <NavLink to='/allServices' style={{ textDecoration: "none", textAlign: 'center' }}>
                        <Button id='exploreBtn' variant="contained" sx={{ mt: 2, backgroundColor: 'rgb(23,23,219)' }} >EXPLORE MORE WATCH</Button>
                    </NavLink>
                </div>
                : <div className='spinner'><Spinner animation="border" variant="primary" /></div>
            }

        </Container>
    );
};

export default HomeServices;