import React from 'react';
import './Deals.css'
import appleImg from './../../../img/apple.png'
import adobeImg from './../../../img/adobe.jpg'
import tencentImg from './../../../img/tencent.png'
import alibabaImg from './../../../img/alibaba.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faGreaterThan} />


const Deals = () => {
    return (
        <div className='deals container text-center'>
            <h3>Special Carrier Deals at Watch Station</h3>
            <h2>Buy a Watch with GPS + Cellular. <br />
                Get up to $100 back after activation.</h2>
            <div className="dealsImg mb-5">
                <img src={appleImg} alt="" />
                <img src={adobeImg} alt="" />
                <img src={alibabaImg} alt="" />
                <img src={tencentImg} alt="" />
            </div>
            <Link className='navlink' to='/allServices' style={{ color: 'rgb(48, 48, 204)' }}><h4>Buy Watch <span style={{ marginLeft: '.5rem' }}>{element}</span></h4></Link>
        </div>
    );
};

export default Deals;