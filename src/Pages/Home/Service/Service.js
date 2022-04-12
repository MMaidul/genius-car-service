import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service__box'>
            <img src={img} alt="" />
            <div className="service__content">
                <h2>{name}</h2>
                <p>price: {price}</p>
                <p>
                    <small>{description}</small>
                </p>
                <button className='service__btn'>
                    Book: {name}
                </button>
            </div>

        </div>
    );
};

export default Service;