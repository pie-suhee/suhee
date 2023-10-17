import MouseMove from "../components/MouseMove";

import '../scss/main.scss'; 

const Main = () => {
    return (  
        <section className="main">
            <div className="mainBg">
                <span>
                    FRONT-END DEV <br />
                    PORTFOLIO
                </span>
            </div>

            <MouseMove />
        </section>
    );
};

export default Main;