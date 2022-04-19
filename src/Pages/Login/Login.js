import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {


    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
    if (user) {
        navigate(from, { replace: true })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    let errorElement;
    if (loading) {
        return <Loading />
    }
    if (error) {
        console.log(error);
        errorElement = <p className='text-danger'>Your password is wrong</p>

    }

    const navigateRegister = () => {
        navigate('/register')
    }
    const restPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Sent Email')
        } else {
            toast('Please enter your email address ')
        }
    }
    return (
        <div className='container w-50 mx-auto my-5'>
            <h2 className='text-primary'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p className='text-center pt-3'>New to Genius Car?
                <Link to={'/register'}
                    onClick={navigateRegister}
                    className="text-danger text-decoration-none"
                >Please Register</Link>
            </p>
            <p className='text-center pt-3'>Forget Password?
                <button
                    onClick={restPassword}
                    className="btn btn-primary"
                >Rest Password</button>
            </p>
            <SocialLogin />
            <ToastContainer />

        </div>
    );
};

export default Login;