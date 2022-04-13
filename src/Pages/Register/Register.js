import React from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import './Register.css';
import auth from '../../Firebase/Firebase.init';

const Register = () => {

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

        console.log(name, email, password);
        createUserWithEmailAndPassword(email, password)

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