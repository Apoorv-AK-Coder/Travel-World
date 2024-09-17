import '../css/style.css';
import '../css/index.css';
import React from 'react';
import Booking from './booking.jsx';

export default function Intro() {
    return (
        <div className='container intro'>
            <div className='row'>
                <div className='column'>
                    <p>At <b>TRAVEL WORLD</b>, we’re passionate about making your travel planning seamless and enjoyable. We’re more than just a booking platform; we’re your travel companion dedicated to ensuring your trips are unforgettable.</p>
                </div>
            </div>
        </div>
    );
}