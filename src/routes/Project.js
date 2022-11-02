import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';
import Work42 from '../components/Work42';
import WorkOther from '../components/WorkOther';

const Project = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="PROJECTS." text="Some of my 
            most recent works. If you are interested in seeing more please visit my Github." />
            <Work />
            <Work42 />
            <WorkOther />
            <Footer />
        </div>
    );
};

export default Project
