import './css/style.css';
import './css/index.css';
import Header from './header.jsx';
import Hero from './about/hero.jsx';
import Intro from './about/intro.jsx';
import About from './about/about.jsx';
import Journey from './about/journey.jsx';
// import Usp from './home/usp.jsx';
import Offers from './about/offers.jsx';
// import OurServices from './home/services.jsx';
// import Slider from './home/slider.jsx';
// import Deals from './home/deals.jsx';
// import Blog from './home/blog.jsx';
import CTA from './about/cta.jsx';
import Footer from './footer.jsx';
import MobileCTA from './mobile-cta.jsx';
import React from 'react';

export default function AboutApp() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Intro />
      <About />
      <Offers />
      <Journey />
      {/* <Usp />
      <OurServices />
      <Slider />
      <Deals />
      <Blog />*/}
      <CTA />
      <Footer />
      <MobileCTA />
    </div>
  );
}