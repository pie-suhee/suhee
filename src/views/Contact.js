import React, { useState } from 'react';
import '../scss/contact.scss';

const Contact = () => {
    const letters = [...'CONTACT'];

    return (  
        <section className="contact">
            <div className="subTitle">
                {letters.map((letter, index) => (
                    <span 
                        id={`spell${index}`}
                        className="spell"
                    >{letter}</span>
                ))}
            </div>
        </section>
    );
};

export default Contact;