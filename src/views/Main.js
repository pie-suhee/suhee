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

            <Link to="/*" className="btn">
                <svg viewBox='0 0 200 200' width='200' height='200' xmlns='http://www.w3.org/2000/svg' class="link__svg" aria-labelledby="link1-title link1-desc">
                    <title id="link1-title">Go to about page</title>
                    <desc id="link1-desc">A rotating link with text placed around a circle with an arrow inside</desc>

                    <path id="link-circle" class="link__path" d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" stroke="none" fill="none" />

                    <path class="link__arrow" d="M 75 100 L 125 100 L 110 85 M 125 100 L 110 115"  fill="none" />

                    <text class="link__text">
                        <textPath href="#link-circle" stroke="none">
                            Go to about Go to about Go to about Go to about
                        </textPath>
                    </text>
                </svg>
            </Link>
        </section>
    );
};

export default Main;