import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

function Header() {
    return (
        <Navbar bg="secondary" variant="dark" expand="lg">
            <Navbar.Brand href="/home">Tweet Sentiment GeoMapper</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/map">Map</Nav.Link>
                    <Nav.Link href="/scattermap">Scatter Map</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;