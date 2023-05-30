import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"
import logo_hackacomp from "../assets/logo_hackacomp.png"
import { Nav, Navbar, Offcanvas, Container } from "react-bootstrap";


function NavbarItem(props) {

    if ("link" in props) {
        return (
            <Nav.Link eventKey={props.name.toLowerCase()} as={Link} to={('/' + props.link)} className="navbarItem">
                {props.name}
            </Nav.Link>
        )
    }
    else {
        return (
            <Nav.Link eventKey={props.name.toLowerCase()} as={Link} to={('/' + props.name)} className="navbarItem">
                {props.name}
            </Nav.Link>
        )
    }
}

export default function NavigationBar() {
    return (
        <Navbar collapseOnSelect expand="md" className="navbar"  variant="dark" fixed="top">
            <Container fluid className="shadow-sm m-0 p-0 rounded">
                <Navbar.Brand><img src={logo_hackacomp} className="logo_hackacomp" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className="light"/>
                <Navbar.Offcanvas id="navbarScroll" placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={"navbarScroll"}>
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-start flex-grow-1 pe-3"
                            navbarScroll>
                            <NavbarItem name="Home" link="" />
                            <NavbarItem name="Sobre" />
                            <NavbarItem name="Organizadores" />
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}