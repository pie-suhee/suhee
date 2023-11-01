import React from 'react';

import '../scss/about.scss'; 
import Greeting from '../components/Greeting';
import Skill from '../components/Skill';

const About = () => {
    return (
        <section className="about">
            <section className="section section1">
                <Greeting />
            </section>
            <section className="section section2">
                <Skill />
            </section>
        </section>
    );
};

export default About;