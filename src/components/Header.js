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

    const [activeItem, setActiveItem] = useState(null);
    
    const handleCopyClipBoard = async (text, index) => {
        try {
            await navigator.clipboard.writeText(text);
            setActiveItem(index);
            setTimeout(() => setActiveItem(null), 700);
        } catch (e) {
            alert('복사에 실패하였습니다');
        }
    };

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
                        about
                    </Link>
                </div>
            </header>

            <div className={`menu ${menuOpen ? 'open' : ''}`}>
                <div className="menuLeft">
                    <ul>
                        <li>
                            <Link to="/*" onClick={toggleMenu}>
                                ABOUT /
                            </Link>
                        </li>
                        <li>
                            <Link to="/responsiveWeb" onClick={toggleMenu}>
                                RESPONSIVE WEB /
                            </Link>
                        </li>
                        <li>
                            <Link to="/javascript" onClick={toggleMenu}>
                                JAVASCRIPT /
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="menuRight">
                    <ul>
                        <li className={`call ${activeItem === 0 ? 'click' : ''}`} onClick={() => {handleCopyClipBoard('01072272783', 0)}}>
                            <img src="/icon/phoneIcon.png" alt="전화번호"/>
                        </li>
                        <li className={`mail ${activeItem === 1 ? 'click' : ''}`} onClick={() => {handleCopyClipBoard('suheeim314@gmail.com', 1)}}>
                            <img src="/icon/mailIcon.png" alt="메일주소"/>
                        </li>
                        <li className={`adress ${activeItem === 2 ? 'click' : ''}`} onClick={() => {handleCopyClipBoard('서울특별시 송파구 오금동', 2)}}>
                            <img src="/icon/adressIcon.png" alt="집주소"/>
                        </li>
                        <li className="github">
                            <a href="https://github.com/pie-suhee" target="_blank" rel="noreferrer">
                                <img src="/icon/githubIcon.png" alt="github"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;