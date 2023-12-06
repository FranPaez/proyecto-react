import {Container, Form, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap';
import "./styles/Navbar.css"
import {CartWidget} from "./CartWidget"
import { NavLink } from 'react-router-dom';


function NavbarBoost() {
return (
    <Navbar expand="lg" className="bg-dark" fixed="top">
    <Container fluid>
        <NavLink to="/" className='text-light NavLink-custom-title'>CAPYBARA PC</NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <NavLink to="/" className='text-light NavLink-custom'>Inicio</NavLink>
            <NavLink to="/ayuda" className='text-light NavLink-custom'>Ayuda</NavLink>
            <NavDropdown title="Productos" id="navbarScrollingDropdown" style={{ color: '#ffffff' }}>
            <NavLink to="/" className="NavLink-custom">Todos los productos</NavLink>
            <NavLink to="category/componentes" className="NavLink-custom">
                Componentes
            </NavLink>
            <NavLink to="category/perifericos" className="NavLink-custom">
                Periféricos
            </NavLink>
            </NavDropdown>
            <NavLink to="/nosotros" className='text-light NavLink-custom'>
            Sobre Nosotros
            </NavLink>
        </Nav>
        <Form className="d-flex">
            <Form.Control
            type="search"
            placeholder="Ej Procesador..."
            className="me-2"
            aria-label="Buscar"
            />
            <Button variant="outline-success" className='Button'>Buscar</Button>
        </Form>
        <CartWidget />
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
}

export default NavbarBoost;
