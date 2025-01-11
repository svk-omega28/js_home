import React from 'react';
import '../styles/Footer.scss';
import instagramIcon from '../assets/instagram.svg';
import githubIcon from '../assets/github.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-info">
                    <p>Для связи со мной:</p>
                    <p>
                        📞 Телефон:
                        <a href="tel:+380952494797">+38 (095) 249-47-97</a>
                    </p>
                    <p>
                        ✉️ Email:
                        <a href="mailto:fallenangel281196@gmail.com">fallenangel281196@gmail.com</a>
                    </p>
                </div>
                <div className="social-links">
                    <a href="https://www.instagram.com/svk_omega28/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" />
                    </a>
                    <a href="https://github.com/svk-omega28" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
