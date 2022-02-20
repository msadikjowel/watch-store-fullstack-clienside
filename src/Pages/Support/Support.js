import React from 'react';
import Header from '../Shared/Header/Header';
import './Support.css'
import { HashLink as Link } from 'react-router-hash-link';
import supportImg from './../../img/support.jpg'
import technicalSupportImg from './../../img/technicalSupport.jpg'
import inquerySupportImg from './../../img/inquiryService.jpg'
import salesSupportImg from './../../img/salesSupport.jpg'
import watch1 from './../../img/watch1.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import Reviews from '../Home/Reviews/Reviews';
import Footer from '../Shared/Footer/Footer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const element = <FontAwesomeIcon icon={faGreaterThan} />

const Support = () => {
    return (
        <>
            <Header></Header>
            <div id='supportImg'>
                <h2>Watch Station Support</h2>
                <img src={supportImg} alt="" />
            </div>

            <div className="supportCategory">
                <Link className='navlink' to='#technicalSupportDesc' smooth>
                    <div className="technicalSupport">
                        <img src={technicalSupportImg} alt="" />
                        <h6>Technical Support</h6>
                    </div></Link>
                <Link className='navlink' to='#technicalSupportDesc' smooth>
                    <div className="inquerySupport">
                        <img src={inquerySupportImg} alt="" />
                        <h6>Inquery Service</h6>
                    </div>
                </Link>
                <Link className='navlink' to='#technicalSupportDesc' smooth>

                    <div className="salesEventSupport">
                        <img src={salesSupportImg} alt="" />
                        <h6>Sales Support</h6>
                    </div>
                </Link>

            </div>

            <div className="descriptionContainer container">
                <div className="technicalSupportDesc mb-5" id='technicalSupportDesc'>
                    <LazyLoadImage effect="blur" className='img-fluid' src={watch1} alt="" />
                    <h2>Get started with your watch</h2>
                    <p>Grab your Phone and follow these simple steps to get up and running with your new Watch.</p>
                    <Link className='navlink' to='/technicalSupport' style={{ color: 'rgb(48, 48, 204)' }}>
                        Set up your Watch <span style={{ marginLeft: '.5rem' }}>{element}</span>
                    </Link>
                </div>
            </div>
            <Reviews></Reviews>
            <Footer></Footer>
        </>
    );
};

export default Support;