import ui from '../asset/ui.png';
import price from '../asset/price.png';
import booking from '../asset/booking.png';
import support from '../asset/support.png';
import car from '../asset/car-rent.jpg';
import flight from '../asset/flight-book.jpg';
import hotel from '../asset/hotel-book.jpg';
// import sass from './asset/scss.png';
import React from 'react';

// import image1 from './asset/1.png';
// import image2 from './asset/2.png';
// import image3 from './asset/3.png';
// import image4 from './asset/4.png';

export const Services = [
    {
        image: flight,
        title: 'Flight Bookings',
        description: "Fly to your destination with confidence. Search and compare flights from a wide range of airlines to find the best deals and schedules. Whether you're planning a short trip or a long-haul journey, our intuitive booking system makes it easy to secure your seat and get to where you need to go."
    },

    {
        image: car,
        title: 'Car Rentals',
        description: "Hit the road with ease and flexibility. Choose from a wide range of vehicles that suit your needs, whether you're looking for a compact car for city driving or an SUV for a family adventure. Enjoy competitive rates, reliable service, and the freedom to explore at your own pace."
    },

    {
        image: hotel,
        title: 'Hotel Reservations',
        description: 'Find the perfect place to stay with our extensive selection of hotels, ranging from luxurious resorts to cozy boutique inns. Enjoy user-friendly search options and detailed descriptions to help you make the best choice for your stay. Book now and rest easy knowing you’ve got a great room waiting for you.'
    }
];

export const USP = [
    {
        image: ui,
        title: 'User-Friendly Interface',
        description: "Effortlessly navigate our website to book cars, hotels, and flights."
    },

    {
        image: support,
        title: '24/7 Customer Support',
        description: "Our dedicated team is here to assist you at any time."
    },

    {
        image: price,
        title: 'Best Price Guarantee',
        description: "Enjoy competitive prices & exclusive deals."
    },

    {
        image: booking,
        title: 'Secure Booking',
        description: "Your personal information is safe with us."
    }
]