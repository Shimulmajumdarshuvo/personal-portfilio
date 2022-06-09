import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar className='navbar-part  ' collapseOnSelect expand="lg" sticky='top' >
                <Container className='nav-bar '>
                    <Navbar.Brand as={Link} to="/">
                        <img width={130} src="https://uncw.edu/eportfolio/images/ePortfolio_510x247.png" alt="" />

                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                        </Nav>
                        <Nav>

                            <Nav.Link href='#'>Home</Nav.Link>
                            <Nav.Link href='#about'>About Me</Nav.Link>
                            <Nav.Link href='#skill'>Skill</Nav.Link>
                            <Nav.Link href="#experience">Experience</Nav.Link>
                            <Nav.Link href="#education">Education</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;