import { Link } from 'react-router-dom';
import '../scss/error.scss';

const Error = () => {
    return (
        <div className="error">  
            <span className="text bookk">페이지 준비중입니다.</span>
            <div className="mainBtn">
                <Link to="/"  className="bookk">
                    메인으로
                </Link>
            </div>
        </div>
    );
};

export default Error;