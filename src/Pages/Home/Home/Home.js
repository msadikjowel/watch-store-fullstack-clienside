import React, { useState, useEffect } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Deals from '../Deals/Deals';
import Feature from '../Feature/Feature';
import HomeServices from '../HomeServices/HomeServices';
import Reviews from '../Reviews/Reviews';
import WatchVideo from '../WatchVideo/WatchVideo';
import ClockLoader from "react-spinners/ClockLoader";



const Home = () => {
    // page loader
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1200);
    }, [])

    return (
        <div>
            {
                loading ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh' }}><ClockLoader color={'#002d74'} loading={loading} size={50} /></div>
                    :

                    <>

                        <Header></Header>
                        <Banner></Banner>
                        <HomeServices></HomeServices>
                        <Feature></Feature>
                        <WatchVideo></WatchVideo>
                        <Deals></Deals>
                        <Categories></Categories>
                        <Reviews></Reviews>
                        <Footer></Footer>
                    </>
            }
        </div>
    );
};

export default Home;