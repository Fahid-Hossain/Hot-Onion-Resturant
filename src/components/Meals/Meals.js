import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Meals = () => {

    return (
        <div>
            <div>
                <Navbar bg="" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Nav className="mx-auto">
                                <Link className="fs-5 fw-bold text-decoration-none text-secondary " to="/breakfast">Breakfast</Link>
                                <Link className="fs-5 fw-bold text-decoration-none text-secondary mx-5" to="/lunch">Lunch</Link>
                                <Link className="fs-5 fw-bold text-decoration-none text-secondary" to="/dinner">Dinner</Link>
                            </Nav>
                    </Container>

                </Navbar>
        
            </div>


        </div>
    );
};

export default Meals;