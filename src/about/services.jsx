import '../css/style.css';
import '../css/index.css';
import React from 'react';
import { Services } from '../css/data.js';

function OurService({ image, title, description }) {
    return (
        <div className='img'>
            <img src={image} alt={title} />
            <div className="details">
            <h3>{title}</h3>
            <p>{description}</p>
            </div>
        </div>
    );
}

export default function OurServices() {
    return (
        <div className="container services">
            <div className="row">
                <div className="column">
                    <h2>Our Services</h2>
                    <div className='d-flex gap1'>
                    {Services.map((contentItem) => <OurService {...contentItem} />)}
                </div>
                </div>
            </div>
        </div>
    );
}