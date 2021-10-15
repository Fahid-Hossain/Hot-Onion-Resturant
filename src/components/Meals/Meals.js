import {Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Meals = () => {
    return (
        <div>
            <div>
                <Navbar bg="" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Nav className="mx-auto">
                            <Link to="/breakfast" as={NavLink} className="fs-5 fw-bold text-decoration-none text-secondary " >Breakfast</Link>
                            <Link className="fs-5 fw-bold text-decoration-none text-secondary mx-5" to="/lunch">Lunch</Link>
                            <Link className="fs-5 fw-bold text-decoration-none text-secondary" to="/dinner">Dinner</Link>
                        </Nav>

                </Navbar>

            </div>


        </div>
    );
};

export default Meals;