import './css/style.css';
import './css/index.css';
import Header from './header.jsx';
import Hero from './home/hero.jsx';
import Intro from './home/intro.jsx';
import Usp from './home/usp.jsx';
import Offer from './home/offer.jsx';
import OurServices from './home/services.jsx';
import Slider from './home/slider.jsx';
import Deals from './home/deals.jsx';
import React from 'react';

export default function App() {  
  return (
    <div className="container">
      <Header />
      <Hero />
      <Intro />
      <Usp />
      <Offer />
      <OurServices />
      <Slider />
      <Deals />
    </div>
  );
}