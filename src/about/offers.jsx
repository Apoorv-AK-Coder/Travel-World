import '../css/style.css';
import '../css/index.css';
import { offers } from '../css/data.js';
import React from 'react';


function SliderData({ image, title, description }) {
  return (
    <div className='slide'>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href=""><button>Read More <i className="fa-solid fa-angles-right fa-fade"></i></button></a>
      </div>
    </div>
  );
}


export default function Offers() {
  return (
    <div className="container mainslider">
      <div className="row">
        <div className="column">
          <h2>Top Destinations</h2>
          <div className="column slider">
            <div className="slider-wrapper">
              {offers.map((contentItem, index) => (
                <SliderData key={index} {...contentItem} />
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}