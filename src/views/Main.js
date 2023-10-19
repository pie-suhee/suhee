import React, { useEffect } from 'react';
import MouseMove from "../components/MouseMove";
import { Link } from 'react-router-dom';

import '../scss/main.scss'; 

const Main = () => {
    useEffect(() => {
        document.body.className = 'main_page';
        return () => {
          document.body.className = '';
        };
    }, []);

    return (  
        <section className="main">
            <div className="mainBg">
                <span>
                    FRONT-END DEV <br />
                    PORTFOLIO
                </span>
            </div>

            <MouseMove />

            <Link to="/about" className="btn"></Link>
        </section>
    );
};

export default Main;