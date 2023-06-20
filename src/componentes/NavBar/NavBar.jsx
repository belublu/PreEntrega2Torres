import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return (
        <Navbar bg="custom" variant="dark" className='miNavBar' >
            <Container>
                <Navbar.Brand href="#home">SCENTOPIA</Navbar.Brand>
                <Nav className="ms-auto gap-4">
                    <Nav.Link href="#home">Hombre</Nav.Link>
                    <Nav.Link href="#features">Mujer</Nav.Link>
                    <Nav.Link href="#pricing">Niños</Nav.Link>
                    <Nav.Link href="#pricing">Accesorios</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    );
}

export default NavBar