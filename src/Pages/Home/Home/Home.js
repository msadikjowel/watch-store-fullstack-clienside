import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import Reviews from '../Reviews/Reviews';
import WatchVideo from '../WatchVideo/WatchVideo';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <WatchVideo></WatchVideo>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;