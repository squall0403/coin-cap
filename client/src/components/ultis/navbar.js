import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Fragment>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">TIXNGO</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/course">Documents</Nav.Link>
                        <Nav.Link href="/">Features</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default NavBar