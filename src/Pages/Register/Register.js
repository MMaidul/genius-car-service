import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import './Register.css';
import auth from '../../Firebase/Firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {

    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (error) {
        console.log(error);
    }
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const agree = e.target.terms.checked;

        if (agree) {
            createUserWithEmailAndPassword(email, password)
            navigate('/home')
        }
    }
    return (
        <div className='register__form'>
            <h2 className='text-center text-primary mb-3'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your name' />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input
                    onClick={() => setAgree(!agree)}
                    type="checkbox" name="terms" id="terms"
                />
                <label
                    // className={agree ? 'text-primary ps-2' : 'text-danger ps-2'}
                    className={`ps-2 mt-2 ${agree ? 'text-primary' : 'text-danger'}`}
                    htmlFor="terms"
                >
                    Accept Genius Car Terms All Condition
                </label>
                <input disabled={!agree} className='btn btn-primary' type="submit" value="Submit" />

            </form>
            <p>Already have you account?
                <Link to={'/login'}
                    className="text-danger text-decoration-none"
                >Login</Link>
            </p>
            <SocialLogin />
        </div>
    );
};

export default Register;