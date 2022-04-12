import React from 'react';
import './Expert.css';


const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className='card'>
                <img className='img-fluid' src={img} alt="" />
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default Expert;