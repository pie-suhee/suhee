import React from 'react';

import '../scss/about.scss'; 
import Greeting from '../components/Greeting';
import Skill from '../components/Skill';
import Show from '../components/Show';

const About = () => {
    return (
        <section className="page about">
            <Greeting />
            <Skill />
            <Show />
        </section>
    );
};

export default About;