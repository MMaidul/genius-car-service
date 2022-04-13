import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
    }
    return (
        <div className='register__form'>
            <h2 className='text-center text-primary mb-3'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your name' />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input type="submit" value="Submit" />
            </form>
            <p>Already have you account?
                <Link to={'/login'}
                    className="text-danger text-decoration-none"
                >Login</Link>
            </p>
        </div>
    );
};

export default Register;