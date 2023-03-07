import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar className="header" expand="md">
      <Container>
        <Link to="/" className="navbar-brand">
          Admin CMS
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="#">
              <i class="fa-solid fa-id-card"></i> Register
            </Link>
            <Link className="nav-link" to="/">
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
