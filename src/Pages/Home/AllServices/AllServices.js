import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { NavLink } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Reviews from '../Reviews/Reviews';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const AllServices = () => {
    const [allServices, setAllServices] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('https://radiant-brook-77884.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
                setLoading(true);
            });
    }, [])
    return (
        <>
            <Header></Header>
            <Container>
                <h2 className='productsTitle'>ALL WATCHES</h2>
                {loading ? <div className="services-container">
                    {
                        allServices.map(service => <div
                            key={service._id}
                            className="carts">
                            <div className="cart">
                                <div className="cart-img">
                                    <LazyLoadImage effect='blur' className='img-fluid' src={service?.img} alt="" />

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
                </div>
                    : <div className='spinner'><Spinner animation="border" variant="primary" /></div>
                }

            </Container>
            <Reviews></Reviews>
            <Footer></Footer>
        </>
    );
};

export default AllServices;