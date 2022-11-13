import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar className='navbar-part text-info' collapseOnSelect expand="lg" sticky='top' >
                <Container className='nav-bar '>
                    <Navbar.Brand as={Link} to="/">
                        <img width={140} height={70} src="https://i.ibb.co/nBv1Xj8/shimul-majumdar-1-removebg-preview.png" alt="" />

                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto  ">
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-white' href='#about'>About Me</Nav.Link>
                            <Nav.Link className='text-white' href='#skill'>Skill</Nav.Link>
                            <Nav.Link className='text-white' href="#experience">Experience</Nav.Link>
                            <Nav.Link className='text-white' href="#education">Education</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link className='text-white' href="#contact">Contact</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;