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
import CookieConsent from 'react-cookie-consent';
import { Helmet } from 'react-helmet';



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
            {/* react helmet for dynamic tab name */}
            <Helmet>
                <title>Best Watch Selling Website | Watch Station</title>
            </Helmet>

            {
                loading ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh' }}>

                    <ClockLoader color={'#002d74'} loading={loading} size={50} />

                </div>
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

                        {/* website cookies accept popup */}
                        <CookieConsent
                            location="bottom"
                            buttonText="Accept"
                            style={{ background: 'rgb(23,23,219)' }}
                            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                        >
                            This website uses cookies in order to offer you the most relavant information. Please accept cookies for optimal performance.
                        </CookieConsent>
                    </>
            }
        </div>
    );
};

export default Home;