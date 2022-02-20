import React from 'react';
import './Categories.css'
import appleWatch from './../../../img/appleW.png'
import samsungWatch from './../../../img/samsung.png'
import googleWatch from './../../../img/google.png'
import allWatch from './../../../img/all.png'
import { HashLink as Link } from 'react-router-hash-link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Categories = () => {
    return (
        <div className='categories container text-center mt-5'>
            <h2 className='category-title'>EXPLORE CATEGORIES</h2>
            <div className="images">

                <Link to='/allServices' className='navlink'> <div className="img">
                    <LazyLoadImage effect='blur' className='img-fluid' src={appleWatch} alt="" />
                    <h3>Apple Watch</h3>
                </div></Link>

                <Link to='/allServices' className='navlink'><div className="img">
                    <LazyLoadImage effect='blur' className='img-fluid' src={samsungWatch} alt="" />
                    <h3>Samsung Watch</h3>
                </div></Link>
                <Link to='/allServices' className='navlink'><div className="img">
                    <LazyLoadImage effect='blur' className='img-fluid' src={googleWatch} alt="" />
                    <h3>Google Watch</h3>
                </div></Link>
                <Link to='/allServices' className='navlink'> <div className="img">
                    <LazyLoadImage effect='blur' className='img-fluid' src={allWatch} alt="" />
                    <h3>Shop All Watches</h3>
                </div></Link>

            </div>
        </div>
    );
};

export default Categories;