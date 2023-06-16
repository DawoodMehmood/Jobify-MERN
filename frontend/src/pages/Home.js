import React from 'react';
import Hero from '../components/Hero';
import Grid from '../components/Grid';
import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <div className='homePage'>
        <Hero />
        <Grid />
        <AboutSection />
    </div>
  );
};

export default Home;
