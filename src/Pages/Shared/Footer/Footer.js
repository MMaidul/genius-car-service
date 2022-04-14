import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <footer>
                <p className='text-center mt-5'>
                    <small>
                        Copyright &copy; {currentYear}
                    </small>
                </p>
            </footer>
        </div>
    );
};

export default Footer;