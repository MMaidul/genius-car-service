import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <header className='sticky-top mb-1'>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo}
                            width="200px"
                            alt=""
                        />
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </header>
    );
};

export default Header;