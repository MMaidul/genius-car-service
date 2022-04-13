import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome to our service {serviceId}</h2>
            <Link to={'/checkout'}>
                <button className="btn btn-outline-primary">Proceed Check Out</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;