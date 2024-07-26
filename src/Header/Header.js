import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import img1 from "../projectImage/procoder-removebg-preview.png";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaBars } from "react-icons/fa";

const CustomToggle = React.forwardRef(({ onClick }, ref) => (
	<button type="button" className="custom-toggle" ref={ref} onClick={onClick}>
		<FaBars />
	</button>
));

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
							<img src={img1} alt="" className="img-fluid" />
						</div>
					</Navbar.Brand>

					<Navbar.Toggle
						as={CustomToggle}
						aria-controls="responsive-navbar-nav"
					/>

					<Navbar.Collapse id="responsive-navbar-nav navmenu">
						<Nav className="me-auto  "></Nav>
						<Nav className="">
							<Nav.Link className=" headerNavbar" href="#about">
								About Me
							</Nav.Link>
							<Nav.Link className=" headerNavbar" href="#skill">
								Skill
							</Nav.Link>
							<Nav.Link className=" headerNavbar" href="#experience">
								Experience
							</Nav.Link>
							<Nav.Link className=" headerNavbar" href="#service">
								Service
							</Nav.Link>

							<Nav.Link className=" headerNavbar" href="#project">
								Project
							</Nav.Link>
							<Nav.Link className=" headerNavbar" href="#testimonial">
								Testimonial
							</Nav.Link>
							<Nav.Link className=" headerNavbar" href="#contact">
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
