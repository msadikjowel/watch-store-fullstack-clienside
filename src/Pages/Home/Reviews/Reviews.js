import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Slider from "react-slick";
import './Review.css'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



const Reviews = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch('https://radiant-brook-77884.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setLoading(true);
            });
    }, [])



    return (
        <div className="reviews container" id="reviews">
            <h2 className="reviewTitle"> Reviews </h2>
            {loading ? <>
                <Slider {...settings}>
                    {
                        reviews.map(review => <div
                            key={review._id}
                        >
                            <div className="reviewCart">
                                <LazyLoadImage effect="blur" style={{ width: '5rem', height: '5rem', borderRadius: '50%', margin: 'auto' }} src={review?.img} alt="" />
                                <h6>{review?.name}</h6>

                                <Rating name="read-only" value={review?.rating} precision={0.5} readOnly /> <br />
                                <p>{review?.comments}</p>
                            </div>


                        </div>)
                    }
                </Slider>
            </>
                : <div className='spinner'><Spinner animation="border" variant="primary" /></div>
            }
        </div>
    );
}
export default Reviews;