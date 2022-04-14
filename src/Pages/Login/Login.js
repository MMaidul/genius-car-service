import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
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

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
    if (user) {
        navigate(from, { replace: true })
    }
    let errorElement;
    if (error) {
        errorElement = (
            <div>
                <p className='text-danger'>Error: {error}</p>
            </div>
        );
    }
    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const navigateRegister = () => {
        navigate('/register')
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {error}
            <p className='text-center pt-3'>New to Genius Car?
                <Link to={'/register'}
                    onClick={navigateRegister}
                    className="text-danger text-decoration-none"
                >Please Register</Link>
            </p>
            <SocialLogin />
        </div>
    );
};

export default Login;