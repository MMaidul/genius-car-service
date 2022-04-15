import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '400px' }} className='d-flex justify-content-center align-items-center'>
            <Spinner style={{ width: '100px', height: '100px' }} animation="grow" />
        </div>
    );
};

export default Loading;