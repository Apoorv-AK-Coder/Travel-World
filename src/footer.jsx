import './css/style.css';
import './css/index.css';
import logo from './asset/logo.png';
import React, { useEffect, useState } from 'react';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="column d-flex gap1">
                        <div className="column">
                            <img src="./src/asset/logo.png" alt="travel world logo" />
                            <div className="social">
                                <p>
                                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                                    <a href=""> &nbsp;&nbsp;<i className="fa-brands fa-youtube"></i></a>
                                    <a href=""> &nbsp;&nbsp;<i className="fa-brands fa-instagram"></i></a>
                                    <a href=""> &nbsp;&nbsp;<i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href=""> &nbsp;&nbsp;<i className="fa-brands fa-twitter"></i></a>
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <h4>More Links</h4>
                            <p><a href="#">Privacy Policy</a></p>
                            <p><a href="#">Legal Notice</a></p>
                            <p><a href="#">Terms & Condition</a></p>
                        </div>
                        <div className="column">
                            <h4>Contact Us</h4>
                            <p><i className="fa-solid fa-phone"></i> <a href="tel:+910000000000">0 XXX XXX XXXX</a></p>
                            <p><i className="fa-solid fa-envelope-open-text"></i> <a href="mailto:example@gmail.com">example@gmail.com</a></p>
                        </div>
                    </div>
                <div className="foot">
                    <p>© 2024 All Rights Reserved | <b>TRAVEL WORLD</b></p>
                </div>
                </div>
            </div>
        </footer>
    )
}