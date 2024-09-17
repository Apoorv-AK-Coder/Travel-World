import '../css/style.css';
import '../css/index.css';
import { SliderSection } from '../css/data.js';
import React, { useState, useRef, useEffect } from 'react';


function SliderData({ image, destinationName, description }) {
    return (
        <div className='slide'>
            <img src={image} alt={destinationName} />
            <div>
            <h3>{destinationName}</h3>
            <p>{description}</p>
            <a href=""><button>Read More <i className="fa-solid fa-angles-right fa-fade"></i></button></a>
            </div>
        </div>
    );
}


export default function Slider() {
  const sliderRef = useRef(null); // Reference for the slider
    const [currentSlide, setCurrentSlide] = useState(0); // State for current slide
    const [slideWidth, setSlideWidth] = useState(250); // Assuming each slide has a fixed width (you can set dynamically)

    const updateSlideWidth = () => {
        const width = window.innerWidth;
        if (width <= 768) {
            setSlideWidth(360); // Set smaller slide width for mobile
        } else {
            setSlideWidth(270); // Set larger slide width for desktop
        }
    };
    
    // Adjust slide width on window resize
    useEffect(() => {
        updateSlideWidth();
        window.addEventListener('resize', updateSlideWidth);
        return () => window.removeEventListener('resize', updateSlideWidth);
    }, []);
    
    const handleNext = () => {
        if (sliderRef.current) {
            setCurrentSlide((prev) => {
                const newSlide = prev + 1;
                const maxSlide = SliderSection.length - 1;
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
        <div className="container mainslider">
          <div className="row">
            <div className="column">
                <h2>Top Destinations</h2>
              <div className="column slider" onWheel={handleWheel}>
                <div className="slider-wrapper" ref={sliderRef}>
                  {SliderSection.map((contentItem, index) => (
                    <SliderData key={index} {...contentItem} />
                  ))}
                </div>
                {/* Conditionally render the previous button */}
            {currentSlide > 0 && (
              <div className="nav-button prev" onClick={handlePrevious}>
                <i className="fa-solid fa-caret-left"></i>
              </div>
            )}
            {/* Conditionally render the next button */}
            {currentSlide < SliderSection.length - 1 && (
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