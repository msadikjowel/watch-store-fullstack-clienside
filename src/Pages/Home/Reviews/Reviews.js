import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './Review.css'





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
    useEffect(() => {
        fetch('https://radiant-brook-77884.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])



    return (
        <div className="reviews container">
            <h2 className="reviewTitle"> Reviews </h2>
            <Slider {...settings}>
                {
                    reviews.map(review => <div
                        key={review._id}
                    >
                        <div className="reviewCart">
                            <img style={{ width: '5rem', height: '5rem', borderRadius: '50%', margin: 'auto' }} src={review?.img} alt="" />
                            <h6>{review?.name}</h6>

                            <Rating name="read-only" value={review?.rating} precision={0.5} readOnly /> <br />
                            <p>{review?.comments}</p>
                        </div>


                    </div>)
                }

            </Slider>
        </div>
    );
}
export default Reviews;