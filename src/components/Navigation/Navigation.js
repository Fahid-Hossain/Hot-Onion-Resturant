import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Nav, Navbar} from 'react-bootstrap';
import logo from "../../images/logo2.png"
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home"><img className="img-fluid" style={{ width: "11rem" }} src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link className="text-dark fw-bold py-1 text-decoration-none" to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
                    <Link className="text-dark fw-bold mx-4 py-1 text-decoration-none" to="/login">Login</Link>
                    <Link className="bg-danger text-white rounded-pill ms-2 px-3 py-1 text-decoration-none" to="/signup">Sign up </Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Navigation;