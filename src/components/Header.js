import { Link } from 'react-router-dom';
import Menu from './Menu';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/" className="Thesignature">
                    suhee
                </Link>
            </div>

            <Menu />

            <div className="contact">
                <Link to="/" className="Thesignature">
                    contact
                </Link>
            </div>
        </header>
    );
};

export default Header;