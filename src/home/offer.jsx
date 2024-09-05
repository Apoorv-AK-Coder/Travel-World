import '../css/style.css';
import '../css/index.css';
import React from 'react';
import offer from '../asset/offer.png';

export default function Offer() {
    return (
        <div className="container offer">
            <div className="row">
                <div className="column flex">
                    <div className="left">
                        <img src={offer} />
                        <h2>Limited Time Offer</h2>
                        <h4>Don't Miss Out!</h4>
                        <h3>20% - 40%</h3>
                        <button>Book Now</button>
                    </div>
                    <div className="right">
                        <h2>Get a Free Quote...</h2>
                        <p>Fields marked with an * are required.</p>
                        <form>
                            <div className="d-flex gap2">
                            <input type="text" placeholder='First Name*'  required/>
                            <input type="text" placeholder='Last Name*'  required/>
                            </div>
                            <div className="d-flex gap2">
                            <input type="tel" placeholder='Phone Number*'  required/>
                            <input type="email" placeholder='E-mail Id*'  required/>
                            </div>
                            <textarea placeholder='Enter Your Message Here...'></textarea>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}