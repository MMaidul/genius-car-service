
import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-3 px-4'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div>
                <button className='btn btn-info w-50 mx-auto d-block my-2'>
                    <img src={google} alt="" />
                    <span className='px-2'> Sing in Google</span>
                </button>
                <button className='btn btn-info w-50 mx-auto d-block my-2'>
                    <img src={facebook} alt="" />
                    <span className='px-2'> Sing in Facebook</span>
                </button>
                <button className='btn btn-info w-50 mx-auto d-block'>
                    <img src={github} alt="" />
                    <span className='px-2'> Sing in Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;