import '../css/style.css';
import '../css/index.css';
import React from 'react';

export default function CTA() {
    return (
        <div className="container cta">
            <div className="row">
                <div className="column">
                    <i className="fa-solid fa-phone-volume"></i>
                    <h2>Join Us on Your Journey</h2>
                    <p>We invite you to explore our services & experience the difference for yourself. Whether you’re booking a flight, reserving a hotel, or renting a car, we’re here to ensure that your travel experience is nothing short of exceptional.</p>
                    <p>Thank you for choosing <b>TRAVEL WORLD</b>. We look forward to helping you plan your next adventure!</p>
                    <button>Contact us</button>
                </div>
            </div>
        </div>
    );
}