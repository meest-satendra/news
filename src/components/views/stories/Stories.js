import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sunset from '../../assets/sunset.jpg'
import { Container } from '@mui/material';

const Stories = () => {
    const [count, setCount] = useState(1);
    var settings = {
        dots: true,
        autoPlay: true,
        infinite: true,
        speed: 500,
        slidesToShow: count,
        slidesToScroll: count
    };
    useEffect(() => {
        if (window.innerWidth < 450 && window.innerWidth > 300) {
            setCount(1);
        } else if (window.innerWidth < 790 && window.innerWidth > 450) {
            setCount(2);
        }
        else if ( window.innerWidth > 790) {
            setCount(3);
        }
    }, [count])
    console.log(window.innerWidth);
    return (
        <Container>
            <Slider {...settings} className='reactSlick'>
                <div className='reactSlickDiv'>
                    <img className='reactSlickImg' src={sunset} />
                </div>
                <div className='reactSlickDiv'>
                    <img className='reactSlickImg' src={sunset} />
                </div>
                <div className='reactSlickDiv'>
                    <img className='reactSlickImg' src={sunset} />
                </div>
                <div className='reactSlickDiv'>
                    <img className='reactSlickImg' src={sunset} />
                </div>
                <div className='reactSlickDiv'>
                    <img className='reactSlickImg' src={sunset} />
                </div>
            </Slider>
        </Container>
    )
}

export default Stories
