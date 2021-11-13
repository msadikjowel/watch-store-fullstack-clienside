import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';
import './HomeServices.css'
import { NavLink } from 'react-router-dom';



const HomeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://radiant-brook-77884.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <Container>
            <h2 className='productsTitle'>WATCHES</h2>
            <div className="services-container">
                {
                    services.map(service => <div
                        key={service._id}
                        className="carts">
                        <div className="cart">
                            <div className="cart-img">
                                <img className='img-fluid' src={service?.img} alt="" />

                            </div>
                            <div className="cart-text">
                                <p>$ {service.price}</p>
                                <h2>{service.name}</h2>
                                <p>{service.shortDesc}</p>

                                <NavLink to={`/purchase/${service._id}`} style={{ textDecoration: "none" }}>
                                    <Button variant="contained" sx={{ mt: 2, backgroundColor: 'rgb(23,23,219)' }}>BUY NOW</Button>
                                </NavLink>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </Container>
    );
};

export default HomeServices;