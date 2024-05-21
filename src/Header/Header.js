import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import img1 from "../projectImage/procoder-removebg-preview.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<>
			<Navbar
				className="navbar-part text-info "
				collapseOnSelect
				expand="lg"
				sticky="top">
				<Container className="nav-bar ">
					<Navbar.Brand as={Link} to="/">
						<div className="working-logo-nav">
							{/* <img decoding="async" src="./images/team/team1.png" className="img-fluid"> */}
							<img src={img1} alt="" className="img-fluid" />
						</div>
						{/* <img
							width={140}
							height={70}
							src="https://i.ibb.co/grXrhqj/Black-Gold-White-Luxury-Royal-Crown-Logo-removebg-preview-removebg-preview.png"
							alt=""
						/> */}
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />

					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto  "></Nav>
						<Nav>
							<Nav.Link className="text-white headerNavbar" href="#about">
								About Me
							</Nav.Link>
							<Nav.Link className="text-white headerNavbar" href="#skill">
								Skill
							</Nav.Link>
							<Nav.Link className="text-white headerNavbar" href="#experience">
								Experience
							</Nav.Link>
							<Nav.Link className="text-white headerNavbar" href="#service">
								Service
							</Nav.Link>

							<Nav.Link className="text-white headerNavbar" href="#project">
								Project
							</Nav.Link>
							<Nav.Link className="text-white headerNavbar" href="#testimonial">
								Testimonial
							</Nav.Link>
							<Nav.Link className="text-white headerNavbar" href="#contact">
								Contact
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
