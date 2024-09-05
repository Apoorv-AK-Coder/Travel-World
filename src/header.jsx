import './css/style.css';
import './css/index.css';
import logo from './asset/logo.png';
import React, {useEffect, useState} from 'react';

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
    // const [navClick, setNavClick] = useState('home');

    // let class1, class2, class3, class4, class5, class6;
    // if (navClick === 'home') { class1 = 'active'; }
    // else if (navClick === 'skills') { class2 = 'active'; }
    // else if (navClick === 'education') { class3 = 'active'; }
    // else if (navClick === 'experience') { class4 = 'active'; }
    // else if (navClick === 'work') { class5 = 'active'; }
    // else if (navClick === 'contact') { class6 = 'active'; }


    // const [mobileNav, setMobileNav] = useState(null);
    // let class7, class8;
    // class7 = 'column navigate';
    // class8 = 'column nav';
    // if(mobileNav === 'navShow'){
    //     class8 = 'column nav navshow';
    //     class7 = 'column navigate navhide';
    // } else if(mobileNav ==='navHide'){
    //     class8 = 'column nav';
    //     class7 = 'column navigate';
    // }

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
                            <div className="column nav" id="view">
                                <i className="fa-solid fa-xmark icon" id="off"></i>
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Flights</a></li>
                                    <li><a href="">Airlines</a></li>
                                    <li><a href="">Amtrak</a></li>
                                    <li><a href="">Travel</a></li>
                                    <li><a href="">Deals</a></li>
                                    <li><a href="">Blog</a></li>
                                </ul>
                            </div>
                            <div className="column" id="on">
                                <i className="fa-solid fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}