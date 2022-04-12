import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <footer>
                <p>
                    <small>
                        Copyright &copy; {currentYear}
                    </small>
                </p>
            </footer>
        </div>
    );
};

export default Footer;