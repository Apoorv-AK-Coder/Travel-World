import '../css/style.css';
import '../css/index.css';
import image from '../asset/journey.png';
import React from 'react';

export default function Journey() {
    return (
        <div className="container about">
            <div className="row d-flex gap">
                <div className="column">
                    <h2>Our Journey</h2>
                    <p><b>TRAVEL WORLD</b> began in 2022 with a clear vision: to simplify travel planning and make booking flights, hotels, and car rentals effortless for everyone. What started as a small idea has grown into a trusted platform, thanks to our commitment to innovation and customer satisfaction.

                    Over the years, we’ve continually evolved, enhancing our services and expanding our offerings to meet the needs of travelers around the world. Our journey has been driven by a passion for making travel accessible and enjoyable, and we’re excited to continue improving and innovating for you.

                    Thank you for joining us on this journey. We look forward to helping you with your next adventure!</p>
                </div>
                <div className="column">
                    <img src={image} alt="misson" />
                </div>
            </div>
        </div>
    );
}