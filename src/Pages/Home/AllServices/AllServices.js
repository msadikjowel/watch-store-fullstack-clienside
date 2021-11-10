import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const AllServices = () => {
    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => setAllServices(data));
    }, [])
    return (
        <>
            <Header></Header>
            <Container>
                <h2 className='productsTitle'>ALL WATCHES</h2>
                <div className="services-container">
                    {
                        allServices.map(service => <div
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
                                    <Button variant="contained" sx={{ mt: 2, backgroundColor: 'rgb(23,23,219)' }}>BUY NOW</Button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

            </Container>
            <Footer></Footer>
        </>
    );
};

export default AllServices;