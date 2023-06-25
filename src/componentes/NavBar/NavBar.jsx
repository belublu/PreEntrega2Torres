import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return (
        <Navbar expand="md" bg="custom" variant="dark" className="miNavBar">
            <Container>
                <Navbar.Brand href="#home">SCENTOPIA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto justify-content-end">
                        <Nav.Link href="#home">Hombre</Nav.Link>
                        <Nav.Link href="#features">Mujer</Nav.Link>
                        <Nav.Link href="#pricing">Niños</Nav.Link>
                        <Nav.Link href="#pricing">Accesorios</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
}

export default NavBar