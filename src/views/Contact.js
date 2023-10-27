import React, { useState } from 'react';
import '../scss/contact.scss';

const Contact = () => {
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
        <section className="contact">
            <div className="subTitle">
                <span className="text">
                    CONTACT
                </span>
            </div>

            <div className="copyList">
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
        </section>
    );
};

export default Contact;