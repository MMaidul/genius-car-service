import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';

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
    if (error) {
        console.log(error);
        errorElement = <p className='text-danger'>Your password is wrong</p>

    }

    const navigateRegister = () => {
        navigate('/register')
    }
    const restPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email)
        alert('Sent Email')
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
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">Accept Genius Car Terms All Condition</label>
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
                <Link to={'/register'}
                    onClick={restPassword}
                    className="text-danger text-decoration-none"
                >Rest Password</Link>
            </p>
            <SocialLogin />
        </div>
    );
};

export default Login;