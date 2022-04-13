import React from 'react';
import './Experts.css';

import expert1 from '../../../../images/experts/expert-1.jpg';
import expert2 from '../../../../images/experts/expert-2.jpg';
import expert3 from '../../../../images/experts/expert-3.jpg';
import expert4 from '../../../../images/experts/expert-4.jpg';
import expert5 from '../../../../images/experts/expert-5.jpg';
import expert6 from '../../../../images/experts/expert-6.png';
import Expert from '../../Expert/Expert';

const Experts = () => {
    const experts = [
        { _id: 1, name: 'John Doe', img: expert1 },
        { _id: 2, name: 'Kevin Paul', img: expert2 },
        { _id: 3, name: 'Leaon Rocky', img: expert3 },
        { _id: 4, name: 'Rajib Shah', img: expert4 },
        { _id: 5, name: 'Alex Jordan', img: expert5 },
        { _id: 6, name: 'Kevin Chahal', img: expert6 }
    ]
    return (
        <div id='experts' className='container'>
            <h2 className='text-primary text-center'>Experts component</h2>
            <div className='row g-5'>
                {
                    experts.map(expert => <Expert
                        key={expert._id}
                        expert={expert}
                    />)
                }
            </div>
        </div>
    );
};

export default Experts;