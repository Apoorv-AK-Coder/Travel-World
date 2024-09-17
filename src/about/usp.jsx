import '../css/style.css';
import '../css/index.css';
import React from 'react';
import { USP } from '../css/data.js';

function Uspdata({ image, title, description }) {
    return (
        <div className='uspcol'>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default function Usp() {

    return (
        <div className="container uspsection">
            <div className="row d-flex">
                <div className="column left">
                    <div></div>
                </div>

                <div className="column data">
                    {USP.map((contentItem) => <Uspdata {...contentItem} />)}
                </div>
            </div>
        </div>
    );
}