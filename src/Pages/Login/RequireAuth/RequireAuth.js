import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    console.log('inside require auth', user);
    const location = useLocation();
    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (!user.emailVerified) {
        return <div>
            <p className='text-danger'>
                Your email is not verified
            </p>
            <p className="text-primary">
                Please, verified your email
            </p>
            <button
                className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Verify email
            </button>
            <ToastContainer />
        </div>
    }
    return children;
};

export default RequireAuth;