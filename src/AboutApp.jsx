import './css/style.css';
import './css/index.css';
import Header from './header.jsx';
import Hero from './about/hero.jsx';
import Intro from './about/intro.jsx';
import About from './about/aboutsection.jsx';
import Journey from './about/journey.jsx';
import Offers from './about/offers.jsx';
import CTA from './about/cta.jsx';
import Footer from './footer.jsx';
import MobileCTA from './mobile-cta.jsx';
import React from 'react';

export default function AboutApp() {
  return (
    <div>
      <Header />
      <Hero />
      <Intro />
      <About />
      <Offers />
      <Journey />
      <CTA />
      <Footer />
      <MobileCTA />
    </div>
  );
}