import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './navBar';
import Hero from './hero';
import Cards from './cards';
import Divider from './divider';
import Tabs from './tabs';
import Carousel from './carousel';
import Accordion from './accordion';
import Footer from './footer';

const Home = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      <Hero />
      <Divider text="Our Features" />
      <Cards />
      <Divider />
      <Tabs />
      <Divider text="Gallery" />
      <Carousel />
      <Divider />
      <Accordion />
      <Footer />
    </div>
  );
};

export default Home;