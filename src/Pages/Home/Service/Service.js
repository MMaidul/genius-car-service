import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;

    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service__box'>
            <img src={img} alt="" />
            <div className="service__content">
                <h2>{name}</h2>
                <p>price: {price}</p>
                <p>
                    <small>{description}</small>
                </p>
                <button
                    onClick={() => navigateToServiceDetail(id)}
                    className='service__btn'>
                    Book: {name}
                </button>
            </div>

        </div>
    );
};

export default Service;