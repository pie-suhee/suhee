import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('main_page');
        } else {
            document.body.classList.remove('main_page');
        }

        return () => {
            document.body.classList.remove('main_page');
        };
    }, [menuOpen]);

    const sideMenu = () => {
        setMenuOpen(false);
    }

    return (
        <>
            <header>
                <div className="logoBtn">
                    <Link to="/" className="Thesignature" onClick={sideMenu}>
                        suhee
                    </Link>
                </div>
                
                <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="menu-line menu-line-1"></div>
                    <div className="menu-line menu-line-2"></div>
                </div>

                <div className="contactBtn">
                    <Link to="/*" className="Thesignature" onClick={sideMenu}>
                        contact
                    </Link>
                </div>
            </header>

            <div className={`menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <Link to="/*" onClick={toggleMenu}>
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link to="/responsiveWeb" onClick={toggleMenu}>
                            RESPONSIVE WEB
                        </Link>
                    </li>
                    <li>
                        <Link to="/javascript" onClick={toggleMenu}>
                            JAVASCRIPT
                        </Link>
                    </li>
                    <li>
                        <Link to="/*" onClick={toggleMenu}>
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header;