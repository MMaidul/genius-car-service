import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Experts from '../Services/Experts/Experts';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <>
            <PageTitle title="home" />
            <Banner />
            <Services />
            <Experts />
        </>
    );
};

export default Home;