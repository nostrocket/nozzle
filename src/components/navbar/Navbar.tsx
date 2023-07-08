import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../logo/Logo'
import { Link } from 'react-router-dom'

function TopNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">
        <Navbar.Brand><Logo /></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/launch-rocket">
              <Nav.Item>Launch A New Rocket</Nav.Item>
            </Link>
            <Link to="/claim-permanym">
              <Nav.Item>Claim Your Permanym</Nav.Item>
            </Link>
            <Link to="/identity-tree">
              <Nav.Item>Identity Tree</Nav.Item>
            </Link>
            <Link to="/problem-tracker">
              <Nav.Item>Problem Tracker</Nav.Item>
            </Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item >Sign In</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;