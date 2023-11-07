import React, { useEffect } from 'react';
import MouseMove from "../components/MouseMove";

import '../scss/main.scss'; 

const Main = () => {
    useEffect(() => {
        document.body.className = 'main_page';
        return () => {
          document.body.className = '';
        };
    }, []);

    return (  
        <section className="page main">
            <div className="mainBg">
                <span className="mainText">
                    <span className="mainText1 bookk">FRONT-END DEV</span> <br />
                    <span className="mainText2 bookk">IM SUHEE</span> <br />
                    <span className="mainText3 bookk">PORTFOLIO</span>
                </span>
            </div>

            <MouseMove />
        </section>
    );
};

export default Main;