import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';




const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="ABOUT." text="I'm a CACATECHX DEVELOPPER" />
            <AboutContent />
            <Footer />
        </div>
    );
};

export default About
