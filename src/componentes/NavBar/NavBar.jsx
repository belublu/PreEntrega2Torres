import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom';
import "./NavBar.css"

const NavBar = () => {
    return (
        <Navbar expand="md" bg="custom" variant="dark" className="miNavBar">
            <Container>
                <Navbar.Brand as={Link} to="/">SCENTOPIA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto justify-content-end">
                        <Nav.Link as={NavLink} to="/categoria/1">Mujer</Nav.Link>
                        <Nav.Link as={NavLink} to="/categoria/2">Hombre</Nav.Link>
                        <Nav.Link as={NavLink} to="/categoria/3">Niñas</Nav.Link>
                        <Nav.Link as={NavLink} to="/categoria/4">Niños</Nav.Link>
                        <Nav.Link as={NavLink} to="/categoria/5">Sets</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
}

export default NavBar