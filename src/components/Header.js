import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const sideMenu = () => {
        setMenuOpen(false);
    }

    return (
        <>
            <header>
                <div className="logo">
                    <Link to="/" className="Thesignature" onClick={sideMenu}>
                        suhee
                    </Link>
                </div>
                
                <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="menu-line menu-line-1"></div>
                    <div className="menu-line menu-line-2"></div>
                </div>

                <div className="contact">
                    <Link to="/" className="Thesignature" onClick={sideMenu}>
                        contact
                    </Link>
                </div>
            </header>

            <div className={`menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <Link to="/about" onClick={toggleMenu}>
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={toggleMenu}>
                            RESPONSIVE WEB
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={toggleMenu}>
                            JAVASCRIPT
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={toggleMenu}>
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header;