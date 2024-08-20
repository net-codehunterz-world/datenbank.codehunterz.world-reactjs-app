import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Navigationbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="https://db.codehunterz.world">db.codehunterz.world</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link eventKey="1" as={Link} to="/">Startseite</Nav.Link>
            <Nav.Link eventKey="2" href="einstellungen">Einstellungen</Nav.Link>
            <Nav.Link eventKey="3" as={Link} to="/datenbanken">Datenbanken</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey="8" as={Link} to="/login">Login</Nav.Link>
            <Nav.Link eventKey="9" as={Link} to="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;