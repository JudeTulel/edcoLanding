import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-content'>
                <div className='footer-section'>
                    <h3>EDCO</h3>
                    <p>Software Consulting and Data Analytics</p>
                </div>
                <div className='footer-section'>
                    <h4>Contact Us</h4>
                    <ul>
                        <li>Email: <a href="mailto:info@edco.com">info@edco.com</a></li>
                        <li>Phone: <a href="tel:+254727909189">+254 727-909-189</a></li>
                        <li><FontAwesomeIcon icon={faWhatsapp} color='green'/> WhatsApp: <a href="https://wa.me/+254736260626" target="_blank" rel="noopener noreferrer">Chat with us</a></li>
                        <li>Address: Sagaas Center , 3rdFloor, Eldoret</li>
                    </ul>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>&copy; {new Date().getFullYear()} EDCO. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
