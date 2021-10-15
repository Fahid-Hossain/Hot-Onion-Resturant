import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import logo from "../../images/logo2.png"

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home"><img className="img-fluid" style={{ width: "11rem" }} src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink className="bg-danger text-white rounded-pill ms-2 px-4" to="/signup">Sign up </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Navigation;