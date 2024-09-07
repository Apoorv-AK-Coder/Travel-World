import '../css/style.css';
import '../css/index.css';
import { popularDeals } from '../css/data.js';
import React, { useState, useRef, useEffect } from 'react';


function SliderData({ image, name, description, timeoffer, include1, include2, include3, include4, icon1, icon2, icon3, icon4, price, duration, offer }) {
    return (
        <div className='slide'>
            <div className="img flex gap2">
                <img src={image} alt={name} />
                <div>
                    <h4>{name}</h4>
                    <p>{timeoffer}</p>
                </div>
            </div>

            <div className="flex gap1 main">
                <div className="icons">
                    <div className="flex gap2">
                        <p><i className={icon1}></i></p>
                        <p>{include1}</p>
                    </div>
                    <div className="flex gap2">
                        <p><i className={icon2}></i></p>
                        <p>{include2}</p>
                    </div>
                    <div className="flex gap2">
                        <p><i className={icon3}></i></p>
                        <p>{include3}</p>
                    </div>
                    <div className="flex gap2">
                        <p><i className={icon4}></i></p>
                        <p>{include4}</p>
                    </div>
                </div>

                <div className='price'>
                    <p>Starting from</p>
                    <h3>{price}</h3>
                    <p>Per person</p>
                    <p><b>{duration}</b></p>
                </div>
            </div>

            <p className='note'>{offer}</p>
        </div>
    );
}


export default function Deals() {
    const sliderRef = useRef(null); // Reference for the slider
    const [currentSlide, setCurrentSlide] = useState(0); // State for current slide
    const slideWidth = 250; // Assuming each slide has a fixed width (you can set dynamically)

    const handleNext = () => {
        if (sliderRef.current) {
            setCurrentSlide((prev) => {
                const newSlide = prev + 1;
                const maxSlide = popularDeals.length - 1;
                if (newSlide > maxSlide) return maxSlide;
                return newSlide;
            });
        }
    };

    const handlePrevious = () => {
        if (sliderRef.current) {
            setCurrentSlide((prev) => {
                const newSlide = prev - 1;
                if (newSlide < 0) return 0;
                return newSlide;
            });
        }
    };

    const handleWheel = (event) => {
        if (event.deltaY > 0) {
            handleNext();
        } else {
            handlePrevious();
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }
    }, [currentSlide, slideWidth]);

    return (
        <div className="container mainslider deals">
            <div className="row">
                <div className="column">
                    <h2>Top Destinations</h2>
                    <div className="column slider" onWheel={handleWheel}>
                        <div className="slider-wrapper" ref={sliderRef}>
                            {popularDeals.map((contentItem, index) => (
                                <SliderData key={index} {...contentItem} />
                            ))}
                        </div>
                        {currentSlide > 0 && (
                            <div className="nav-button prev" onClick={handlePrevious}>
                                <i className="fa-solid fa-caret-left"></i>
                            </div>
                        )}
                        {currentSlide < popularDeals.length - 1 && (
                            <div className="nav-button next" onClick={handleNext}>
                                <i className="fa-solid fa-caret-right"></i>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}