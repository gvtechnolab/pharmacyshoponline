"use client";
import * as React from 'react';
import Container from '@mui/material/Container';
import Slider from 'react-slick';
import ProductCarouselItem from './ProductCarouselItem';
import { Products } from '../../utills/globalData'
import styles from './ProductCarousel.module.css'

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styles.ProductCarouselArrows}`}
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
            className={`${className} ${styles.ProductCarouselArrows}`}
            style={{
                ...style, display: "block"
            }}
            onClick={onClick}
        />
    );
}

export default function ProductCarousel() {
    const settings = {
        initialSlide: 0,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
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
        <Container sx={{
            padding: '8px',
            marginY: '14px',
        }}>
            <Slider {...settings} className='ProductCarouselSlider'>
                {Products?.map((item, i) => (
                    <ProductCarouselItem key={i} item={item} />
                ))}
            </Slider>
        </Container>
    );
}
