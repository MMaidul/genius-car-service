import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Services/Experts/Experts';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <Experts />
        </>
    );
};

export default Home;