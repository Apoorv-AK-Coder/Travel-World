import '../css/style.css';
import '../css/index.css';
import React from 'react';
import {blogposts} from  '../css/data.js';

function Blogdata({ image, title, description, subtitle, button }) {
    return (
        <div className='blogs'>
            <img src={image} alt={title} />
            <div>
            <h3>{subtitle}</h3>
            <p>{description}</p>
            <button>{button}</button>
            </div>
        </div>
    );
}

export default function Blog() {
    return (
        <div className="container blog">
            <div className="row">
                <div className="column">
                    <h2>Simplify Your Travel Plans with Our All-in-One Booking Platform</h2>
                    <p>Planning a trip can be overwhelming, but with our easy-to-use online booking platform, you can book flights, hotels, and car rentals all in one place. Whether you're traveling for business, leisure, or a special occasion, our seamless services are designed to make your journey smooth and hassle-free.</p>

                    <div className="column d-flex gap1">
                    {blogposts.map((contentItem) => <Blogdata {...contentItem} />)}
                </div>
                </div>
            </div>
        </div>
    );
}