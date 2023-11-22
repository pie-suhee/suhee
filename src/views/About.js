import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import '../scss/about.scss'; 
import Greeting from '../components/Greeting';
import Skill from '../components/Skill';

const About = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return (
        <section className="page about">
            <Greeting />
            <Skill />
        </section>
    );
};

export default About;