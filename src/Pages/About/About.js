import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About Genius Car Service</title>
            </Helmet>
            <h2>This about component</h2>
        </div>
    );
};

export default About;