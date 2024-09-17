import '../css/style.css';
import '../css/index.css';
import image from '../asset/about.png';
import React from 'react';

export default function About() {
    return (
        <div className="container about">
            <div className="row d-flex gap">
                <div className="column">
                    <img src={image} alt="misson" />
                </div>
                <div className="column">
                    <h2>Our Mission</h2>
                    <p>At <b>Travel World</b>, our mission is to revolutionize the way you experience travel planning. We are committed to offering a comprehensive, user-friendly platform that consolidates all your travel needs into one convenient place. Our goal is to simplify the booking process for flights, hotels, and car rentals, providing you with a seamless experience from start to finish.
                    <br />
                    We believe that travel should be accessible, enjoyable, and stress-free. That’s why we focus on delivering exceptional value, personalized service, and cutting-edge technology to make every aspect of your journey effortless. Whether you’re booking a quick weekend escape or planning a complex international trip, we’re here to support you every step of the way.</p>
                </div>
            </div>
        </div>
    );
}