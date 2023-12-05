"use client";
import React from 'react'
import Slider from "react-slick";
import CarouselItem from './HomeCarouselItem'
import { HomeCarouselData } from '../../utills/globalData'
import styles from './HomeCarousel.module.css'

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styles.HomeCarouselArrows}`}
            style={{
                ...style, display: "block"
            }}
            onClick={onClick}
        />
    );
}
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styles.HomeCarouselArrows}`}
            style={{
                ...style, display: "block"
            }}
            onClick={onClick}
        />
    );
}
const HomeCarousel = () => {
    const settings = {
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        dots: true,
        appendDots: dots => (
            <div style={{
                position:'absolute',
                bottom:'10px',
            }}>
                <ul style={{ margin: "45px" }}> {dots} </ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
    return (
        <>
            <Slider {...settings} className={styles.forCarouselArrowBtns}>
                {HomeCarouselData?.map((item, index) => (
                    <CarouselItem key={index} item={item} />
                ))}
            </Slider>
        </>
    )
}

export default HomeCarousel
