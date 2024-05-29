import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faBars, faTimes, faHome, faComment } from '@fortawesome/free-solid-svg-icons';
import logo from '../Assets/logo.png';
import './Navbar.css';
import { Services } from './Data';
import ContactButton from './ContactButton';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className='container'>
            <Link to='/'>
                <img
                    src={logo}
                    alt='logo'
                    style={{
                        width: '70px',
                        height: '70px',
                        margin: '10px'
                    }}
                />
            </Link>
            <button className='menu-toggle' onClick={handleMenuClick}>
                <FontAwesomeIcon icon={showMenu ? faTimes : faBars} color='black' />
            </button>
            <nav className={`nav-menu ${showMenu ? 'show' : ''}`}>
                <ul>
                    <li>
                        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                            <FontAwesomeIcon icon={faHome} color='maroon' size='16' style={{ marginRight: 6 }} />
                            Home
                        </Link>
                    </li>
                    <li>
                        <div onClick={handleDropdownClick}>
                            Services
                            <FontAwesomeIcon
                                icon={showDropdown ? faAngleDown : faAngleUp}
                                color='maroon'
                                style={{ marginLeft: 6 }}
                            />
                        </div>
                        <div className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
                            <div className="services-grid">
                                {Services.map((service, index) => (
                                    <Link key={index} to={`/${service.link}`} className="service-link" onClick={handleDropdownClick}>
                                        {service.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to='/testimony' style={{ textDecoration: 'none', color: 'black' }}>Success Stories</Link>
                    </li>
                    <li>
                    <ContactButton/>
                    </li>
                </ul>
            </nav>
            
        </header>
    );
};

export default Navbar;
