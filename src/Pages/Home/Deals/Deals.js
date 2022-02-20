import React from 'react';
import './Deals.css'
import appleImg from './../../../img/apple.png'
import adobeImg from './../../../img/adobe.jpg'
import tencentImg from './../../../img/tencent.png'
import alibabaImg from './../../../img/alibaba.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const element = <FontAwesomeIcon icon={faGreaterThan} />


const Deals = () => {
    return (
        <div className='deals container text-center'>
            <h3>Special Carrier Deals at Watch Station</h3>
            <h2>Buy a Watch with GPS + Cellular. <br />
                Get up to $100 back after activation.</h2>
            <div className="dealsImg mb-5">
                <LazyLoadImage effect='blur' src={tencentImg} alt="" />
                <LazyLoadImage effect='blur' src={appleImg} alt="" />
                <LazyLoadImage effect='blur' src={adobeImg} alt="" />
                <LazyLoadImage effect='blur' src={alibabaImg} alt="" />
            </div>
            <Link className='navlink' to='/allServices' style={{ color: 'rgb(48, 48, 204)' }}><h4>Buy Watch <span style={{ marginLeft: '.5rem' }}>{element}</span></h4></Link>
        </div>
    );
};

export default Deals;