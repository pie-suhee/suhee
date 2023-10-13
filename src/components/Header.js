import { Link } from 'react-router-dom';
import Menu from './Menu';

const Header = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <Link to="/" className="Thesignature">
                        suhee
                    </Link>
                </div>
                
                <div className="menu-icon">
                    <div className="menu-line menu-line-1"></div>
                    <div className="menu-line menu-line-2"></div>
                </div>
                
                <div className="contact">
                    <Link to="/" className="Thesignature">
                        contact
                    </Link>
                </div>
            </header>

            <Menu />
        </>
    );
};

export default Header;