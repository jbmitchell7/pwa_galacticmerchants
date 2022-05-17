import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <Navbar
            bg="primary"
            variant="dark"
            className="my-nav-bar"
            expand="md">
            <Navbar.Brand>Galactic Merchants</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link to={"/dashboard"} className="nav-link">Dashboard</Link>
                    <Link to={"/account"} className="nav-link">Account</Link>
                    <Link to={"/navigation"} className="nav-link">Navigation</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;