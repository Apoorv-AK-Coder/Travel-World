import ui from '../asset/ui.png';
import price from '../asset/price.png';
import booking from '../asset/booking.png';
import support from '../asset/support.png';
import car from '../asset/car-rent.jpg';
import flight from '../asset/flight-book.jpg';
import hotel from '../asset/hotel-book.jpg';

import darjeeling from '../asset/darjeeling.jpg';
import london from '../asset/london.jpg';
import thailand from '../asset/thailand.jpg';
import china from '../asset/china.jpg';
import kathmandu from '../asset/kathmandu.jpg';
import newyork from '../asset/newyork.jpg';
import malaysia from '../asset/malaysia.jpg';
import egypt from '../asset/egypt.jpg';

export const Services = [
    {
        image: flight,
        title: 'Flight Bookings',
        description: "Fly to your destination with confidence. Search & compare flights from a wide range of airlines to find the best deals & schedules. Whether you're planning a short trip or a long-haul journey, our intuitive booking system makes it easy to secure your seat & get to where you need to go."
    },

    {
        image: car,
        title: 'Car Rentals',
        description: "Hit the road with ease & flexibility. Choose from a wide range of vehicles that suit your needs, whether you're looking for a compact car for city driving or an SUV for a family adventure. Enjoy competitive rates, reliable service, & the freedom to explore at your own pace."
    },

    {
        image: hotel,
        title: 'Hotel Reservations',
        description: 'Find the perfect place to stay with our extensive selection of hotels, ranging from luxurious resorts to cozy boutique inns. Enjoy user-friendly search options & detailed descriptions to help you make the best choice for your stay. Book now & rest easy knowing you’ve got a great room waiting for you.'
    }
];

export const USP = [
    {
        image: ui,
        title: 'User-Friendly Interface',
        description: "Effortlessly navigate our website to book cars, hotels, & flights."
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

export const SliderSection = [
    {
        image: china,
        destinationName: 'China',
        description: 'A vast land of ancient history & modern marvels, home to the Great Wall & vibrant cities like Beijing & Shanghai.'
    },

    {
        image: darjeeling,
        destinationName: 'Darjeeling',
        description: 'Nestled in the Himalayas, Darjeeling is famous for its stunning tea gardens, breathtaking views, & the iconic Toy Train.'
    },

    {
        image: egypt,
        destinationName: 'Egypt',
        description: 'A land of ancient pharaohs, Egypt is home to the Pyramids of Giza, the Sphinx, & the majestic Nile River.'
    },

    {
        image: kathmandu,
        destinationName: 'Kathmandu',
        description: 'The heart of Nepal, Kathmandu is a spiritual haven, rich in ancient temples, stupas, & Himalayan culture.'
    },

    {
        image: london,
        destinationName: 'London',
        description: 'A global city blending history & modernity, with iconic landmarks like Big Ben, the Tower of London, & Buckingham Palace.'
    },

    {
        image: malaysia,
        destinationName: 'Malaysia',
        description: 'A melting pot of cultures, Malaysia boasts stunning beaches, lush rainforests, & architectural wonders like the Petronas Towers.'
    },

    {
        image: newyork,
        destinationName: 'New York',
        description: 'The city that never sleeps, New York is a bustling metropolis known for Times Square, the Statue of Liberty, & its diverse culture.'
    },

    {
        image: thailand,
        destinationName: 'Thailand',
        description: 'Famed for its tropical beaches, ornate temples, & vibrant cities like Bangkok, Thailand offers a rich blend of history & modernity.'
    }
]

export const popularDeals= [
    {
        image: thailand,
        name: 'Tropical Paradise: Thailand Adventure',
        duration: '8 days / 7 nights',
        price: '$1,499',
        timeoffer: 'Until March 2025',
        offer: 'Free Island Excursion with Early Bookings!',

        icon1: 'fa-solid fa-arrow-right-arrow-left',
        icon2: 'fa-solid fa-bed',
        icon3: 'fa-solid fa-user-tie',
        icon4: 'fa-solid fa-umbrella-beach',
        include1: 'Round-trip flights',
        include2: 'Luxury hotel stay',
        include3: 'Guided temple tours',
        include4: 'Beach activities'
    },

    {
        image: malaysia,
        name: 'Tropical Escape to Malaysia',
        description: 'Relax in the tropical paradise of Malaysia. Explore beautiful islands, rainforests, and vibrant city life with this exotic getaway package.',
        duration: '7 days / 6 nights',
        price: '$1,299',
        includes: 'Round-trip flights, beachfront resort stay, island-hopping tours, and local dining experiences.',
        timeoffer: 'Until January 2025',
        offer: 'Free Island Tour on Group Bookings!'
    },

    {
        image: newyork,
        name: 'New York City Lights Experience',
        description: 'Explore the city that never sleeps with this exciting New York package. Visit Times Square, the Statue of Liberty, Central Park, and enjoy Broadway shows and shopping.',
        duration: '5 days / 4 nights',
        price: '$1,999',
        includes: 'Round-trip flights, stay in a 4-star hotel, guided city tours, and Broadway show tickets.',
        timeoffer: 'Until December 2024',
        offer: '10% Off Bookings Before October!'
    },

    {
        image: london,
        name: 'London City Explorer',
        description: 'Experience the best of London’s history, culture, and iconic landmarks. This package includes visits to Buckingham Palace, the Tower of London, and a Thames River cruise.',
        duration: '6 days / 5 nights',
        price: '$1,699',
        includes: 'Round-trip flights, stay in a 4-star hotel, guided city tours, and a London Eye ticket.',
        timeoffer: 'Until May 2025',
        offer: 'Free Thames Cruise Ticket with Booking!'
    },

    {
        image: egypt,
        name: 'Mysteries of Ancient Egypt',
        description: 'Step back in time with this exclusive tour of Egypt’s ancient wonders. Explore the Pyramids of Giza, the Sphinx, and cruise the Nile River while experiencing the rich culture.',
        duration: '6 days / 5 nights',
        price: '$1,899',
        includes: 'Round-trip flights, Nile River cruise, guided tours of ancient sites, and stays in 4-star hotels.',
        timeoffer: 'Until February 2025',
        offer: 'Save 15% on bookings before November!'
    },

    {
        image: kathmandu,
        name: 'Kathmandu Valley Adventure',
        description: 'Explore the rich cultural heritage and spiritual sites of Kathmandu. Visit ancient temples, enjoy panoramic views of the Himalayas, and immerse yourself in Nepalese traditions.',
        duration: '5 days / 4 nights',
        price: '$799',
        includes: 'Round-trip flights, 3-star hotel stay, guided city tours, and a visit to UNESCO World Heritage sites.',
        timeoffer: 'Untill April 2025',
        offer: 'Free Mountain Tour on Early Bookings!'
    },

    {
        image: china,
        name: 'Cultural Wonders of China',
        description: 'Discover the ancient history and modern marvels of China. This package includes visits to the Great Wall, the Forbidden City, and vibrant cities like Beijing and Shanghai.',
        duration: '7 days / 6 nights',
        price: '$1,499',
        includes: 'Round-trip flights, 4-star hotel accommodations, guided tours of major attractions, and traditional Chinese meals.',
        timeoffer: 'Until December 2024',
        offer: 'Save 20% on Group Bookings!'
    },

    {
        image: darjeeling,
        name: 'Darjeeling Tea Garden Retreat',
        description: 'Nestled in the Himalayas, this Darjeeling retreat offers stunning views of the tea gardens and mountains. Enjoy the iconic Toy Train ride and immerse yourself in serene nature.',
        duration: '5 days / 4 nights',
        price: '$999',
        includes: 'Round-trip flights, stay in a tea estate resort, guided tea garden tours, Toy Train ride, and local cuisine.',
        timeoffer: 'Until March 2025',
        offer: 'Free Tea Tasting & Plantation Tour!'
    }
]