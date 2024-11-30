import React, { useState } from "react";
import style from "./Carousel.module.css";
import ImgSvg from "../../assets/icons/Ellipse3.png"
import Back from "../../assets/icons/Back.png"
 import  TimeClock from "../../assets/icons/TimeSpan.png"

const Carousel = () => {
    
    const reviews = [
        {
            id: 1,
            name: "John Doe",
            country: "USA",
            rating: 4,
            time: "24th September, 2023",
            comment: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly.",
            imgSrc: ImgSvg, 
        },
        {
            id: 2,
            name: "Jane Smith",
            country: "Canada",
            rating: 5,
            time: "24th September, 2023",
            comment: "Excellent service, will buy again.",
            imgSrc: ImgSvg, 
        },
        {
            id: 3,
            name: "Sam Lee",
            country: "UK",
            rating: 3,
            time: "24th September, 2023",
            comment: "Good but could use some improvement.",
            imgSrc: ImgSvg, 
        },
        {
            id: 4,
            name: "Anna Kim",
            country: "Australia",
            rating: 5,
            time: "24th September, 2023",
            comment: "Absolutely loved it!",
            imgSrc: ImgSvg, 
        },
        {
            id: 5,
            name: "Tom Brown",
            country: "Germany",
            rating: 4,
            time: "5 hours ago",
            comment: "Very good quality.",
            imgSrc: ImgSvg, 
        },
    ];

    
    const [currentReview, setCurrentReview] = useState(0);

    
    const nextReview = () => {
        setCurrentReview((prevReview) =>
            prevReview === reviews.length - 3 ? 0 : prevReview + 1
        );
    };

    
    const prevReview = () => {
        setCurrentReview((prevReview) =>
            prevReview === 0 ? reviews.length - 3 : prevReview - 1
        );
    };

    return (
        <div className={style.carouselContainer}>

            <div className={style.carouselHeader}>
                <div className={style.title}>Customer Reviews</div>
                <div className={style.buttons}>
                    <button className={style.prevButton} onClick={prevReview}> 
                        <img src={Back} alt="" />
                    </button>
                    
                    <button className={style.nextButton} onClick={nextReview}>
                    <img src={Back} alt="" />
                    </button>
                </div>
            </div>

       
            <div className={style.carouselContent}>
                <div className={style.reviewsWrapper}>
                    
                    {reviews.slice(currentReview, currentReview + 3).map((review) => (
                        <div key={review.id} className={style.reviewItem}>
                            <div className={style.reviewHeader}>
                                <div className={style.userInfo}>
                                    <div className={style.userImage}>
                                        <img src={review.imgSrc} alt="User" />
                                    </div>
                                    <div className={style.userDetails}>
                                        <p className="fw600" >{review.name}</p>
                                        <p className="textyellow">{review.country}</p>
                                    </div>
                                </div>
                                <div className={style.reviewMeta}>
                                    <div>
                                        {

                                            [...Array(review.rating)].map((_, index) => (
                                                <span key={index} className="star starWidth"></span>
                                            ))
                                        }


                                    </div>
                                    <p className="flex  gaphalfrem"> <span> <img src={TimeClock} alt="" /> </span> {review.time}</p>
                                </div>
                            </div>

                            <div className={style.reviewText}>
                                <p className="font16px">{review.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
