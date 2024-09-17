import '../css/style.css';
import '../css/index.css';
import React from 'react';

export default function CTA() {
    return (
        <div className="container cta">
            <div className="row">
                <div className="column">
                    <i className="fa-solid fa-phone-volume"></i>
                    <h2>Start Your Adventure Today!</h2>
                    <p>Don’t let your dream getaway wait any longer! Whether you’re searching for the perfect flight, a reliable rental car, or a cozy hotel, we’ve got you covered. With our user-friendly platform, you can easily compare options, find exclusive deals, and book everything you need for an unforgettable journey—all in one place. Take the first step toward your next adventure and explore the world with us!</p>
                    <button>Contact us</button>
                </div>
            </div>
        </div>
    );
}