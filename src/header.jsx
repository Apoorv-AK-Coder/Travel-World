import React, { useEffect, useState } from 'react';
import './css/style.css';
import './css/index.css';
import logo from './asset/logo.png';

export default function Header() {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) { // Adjust the threshold as needed
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [navClick, setNavClick] = useState('home');

    // Array for navigation items
    const navItems = [
        { id: 'home', label: 'Home', link: '/' },
        { id: 'about', label: 'About Us', link: './about.html' },
        { id: 'flight', label: 'Flights', link: '#' },
        { id: 'airline', label: 'Airlines', link: '#' },
        { id: 'travel', label: 'Travel', link: '#' },
        { id: 'deals', label: 'Deals', link: '#' },
        { id: 'blog', label: 'Blog', link: '#' },
    ];


    const [mobileNav, setMobileNav] = useState(false); // false means nav is hidden, true means nav is shown

    const handleNavShow = () => {
        setMobileNav(true);  // Show navigation
    };

    const handleNavHide = () => {
        setMobileNav(false); // Hide navigation
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="newheader">
                <div className="container">
                    <div className="head1">
                        <div className="row flex gap1">
                            <div className="column">
                                <p><i className="fa-solid fa-phone"></i> <a href="tel:+910000000000">0XXXXX XXXXX</a></p>
                            </div>
                            <div className="column">
                                <p><i className="fa-solid fa-envelope-open-text"></i> <a href="mailto:example@gmail.com">example@gmail.com</a></p>
                            </div>
                            <div className="column social">
                                <p>
                                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                                    <a href=""> &nbsp;&nbsp;<i className="fa-brands fa-youtube"></i></a>
                                    <a href=""> &nbsp;&nbsp;<i className="fa-brands fa-instagram"></i></a>
                                    <a href=""> &nbsp;&nbsp;<i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href=""> &nbsp;&nbsp;<i className="fa-brands fa-twitter"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="head">
                        <div className="flex gap1">
                            <div className="column">
                                <a href="./index.html"><img src={logo} /></a>
                            </div>
                            <div className={`column nav ${mobileNav ? 'navShow' : ''}`}>
                                <i onClick={handleNavHide} className="fa-solid fa-xmark icon" id="off"></i>
                                <ul>
                                    {navItems.map((item) => (
                                        <li key={item.id}
                                            onClick={() => setNavClick(item.id)}
                                            className={navClick === item.id ? 'active' : ''}
                                        >
                                            <a href={item.link}>{item.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`column ${mobileNav ? 'navHide' : ''}`} id="on">
                                <i onClick={handleNavShow} className="fa-solid fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}