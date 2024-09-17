import '../css/style.css';
import '../css/index.css';
import React, {useState} from 'react';
import PassengerSelection from './passangersection.jsx';

export default function Booking() {

    const [selectForm, setSelectForm] = useState('flight');

    let class1, class2, class3, hotel, car, flight;
    if (selectForm === 'flight') { class1 = 'active'; flight = 'show';}
    else if (selectForm === 'car') { class2 = 'active'; car = 'show';}
    else if (selectForm === 'hotel') { class3 = 'active'; hotel = 'show';}

    return (
        <div className="booking">
            <div className="tabs">
                <ul>
                    <li onClick={() => setSelectForm('flight')} className={class1}>Flights</li>
                    <li onClick={() => setSelectForm('car')} className={class2}>Car</li>
                    <li onClick={() => setSelectForm('hotel')} className={class3}>Hotel</li>
                </ul>
            </div>
            <div className="form" id={flight}>
                <h2>Book Your Flight <i className="fa-solid fa-plane-departure"></i> Now...</h2>
                <form>
                    <div className="d-flex gap1">
                    <input type='text' placeholder='🛫 Departure City*' required />
                    <input type='text' placeholder='🛬 Arrival City*' required />
                    </div>
                    <div className="d-flex gap1">
                    <input type='date' placeholder='📆 Departure Date*' required />
                    <PassengerSelection />
                    </div>
                    <button>Search Now <i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>

            <div className="form" id={car}>
                <h2>Book Your Car <i className="fa-solid fa-car"></i> Now...</h2>
                <form>
                    <div className="d-flex gap1">
                    <input type='text' placeholder='🚘 From...*' required />
                    <input type='text' placeholder='🚘 To...*' required />
                    </div>
                    <div className="d-flex gap1">
                    <input type='datetime-local' placeholder='📆 Departure Date*' required />
                    <button>Search Now <i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>
            </div>

            <div className="form" id={hotel}>
                <h2>Book Your Room <i className="fa-solid fa-hotel"></i> Now...</h2>
                <form>
                    <div className="d-flex gap1">
                    <input type='text' placeholder='🌆 Select City*' required />
                    <PassengerSelection />
                    </div>
                    <div className="d-flex gap1">
                    <input type='date' placeholder=' Arrival City*' required />
                    <input type='date' placeholder='📆 Departure Date*' required />
                    </div>
                    <button>Search Now <i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
        </div>
    );
}