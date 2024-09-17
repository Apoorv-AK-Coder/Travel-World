import '../css/style.css';
import '../css/index.css';
import React, { useState } from 'react';

export default function PassengerSelection() {
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [numInfants, setNumInfants] = useState(0);
  const [cabinClass, setCabinClass] = useState('Economy');

  const handleIncrement = (type) => {
    switch (type) {
      case 'adult':
        setNumAdults(numAdults + 1);
        break;
      case 'child':
        setNumChildren(numChildren + 1);
        break;
      case 'infant':
        setNumInfants(numInfants + 1);
        break;
      default:
        break;
    }
  };

  const handleDecrement = (type) => {
    switch (type) {
      case 'adult':
        if (numAdults > 0) {
          setNumAdults(numAdults - 1);
        }
        break;
      case 'child':
        if (numChildren > 0) {
          setNumChildren(numChildren - 1);
        }
        break;
      case 'infant':
        if (numInfants > 0) {
          setNumInfants(numInfants - 1);
        }
        break;
      default:
        break;
    }
  };

  const getTotalTravelers = () => {
    return numAdults + numChildren + numInfants;
  };

  return (
    <div className='passenger'>
      <div className="passenger-info">👤 
        <span>{getTotalTravelers()} Traveller, {cabinClass}</span>
      </div>
      <div className="passenger-selection">
        <div className="cabin-class-selector">
          <label htmlFor="cabinClass">Cabin Class:</label>
          <select id="cabinClass" value={cabinClass} onChange={(e) => setCabinClass(e.target.value)}>
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First">First</option>
          </select>
        </div>
        <div className="passenger-counters">
          <div className="passenger-counter">
            <label>Adult(s):</label>
            <button onClick={() => handleDecrement('adult')}>-</button>
            <span>{numAdults}</span>
            <button onClick={() => handleIncrement('adult')}>+</button>
          </div>
          <div className="passenger-counter">
            <label>Child(ren):</label>
            <button onClick={() => handleDecrement('child')}>-</button>
            <span>{numChildren}</span>
            <button onClick={() => handleIncrement('child')}>+</button>
          </div>
          <div className="passenger-counter">
            <label>Infant(s):</label>
            <button onClick={() => handleDecrement('infant')}>-</button>
            <span>{numInfants}</span>
            <button onClick={() => handleIncrement('infant')}>+</button>
          </div>
        </div>
        <button>Done</button>
      </div>
    </div>
  );
}