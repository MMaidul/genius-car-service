
import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;
    if (errorGoogle || errorGithub) {
        errorElement = <p
            className='text-danger'
        >
            Error: {errorGoogle?.message} {errorGithub?.message}
        </p>
    }

    if (userGoogle || userGithub) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-3 px-4'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 mx-auto d-block my-2'>
                    <img src={google} alt="" />
                    <span className='px-2'> Sing in Google</span>
                </button>
                <button className='btn btn-info w-50 mx-auto d-block my-2'>
                    <img src={facebook} alt="" />
                    <span className='px-2'> Sing in Facebook</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 mx-auto d-block'>
                    <img src={github} alt="" />
                    <span className='px-2'> Sing in Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;