import React from 'react';

import '../scss/about.scss'; 
import Greeting from '../components/Greeting';
import Skill from '../components/Skill';

const About = () => {
    return (
        <section className="about">
            <Greeting />
            <Skill />
            <section className='ex'></section>
        </section>
    );
};

export default About;