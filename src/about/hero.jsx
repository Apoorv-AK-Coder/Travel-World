import '../css/style.css';
import '../css/index.css';
import React from 'react';
import Booking from './booking.jsx';

export default function Hero() {
    return (
        <div className='container bg1'>
            <div className='row d-flex'>
                <div className='column'>
                    <h1>Discover More About Travel World</h1>
                    <Booking />
                </div>
                <div className="column"></div>
            </div>
        </div>
    );
}