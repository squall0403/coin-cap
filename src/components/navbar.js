import React, { Fragment, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

const CusNavbar = () => {
    const SideMenu = () => {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <Fragment>
                <Navbar>
                    <Container>
                        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <span className="material-symbols-outlined btn-menu" onClick={handleShow}>
                                apps
                            </span>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Offcanvas show={show} onHide={handleClose} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>MENU</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item><Link to='/todo'>TODO</Link></ListGroup.Item>
                            <ListGroup.Item><Link to='/'>HOME</Link></ListGroup.Item>
                        </ListGroup>
                    </Offcanvas.Body>
                </Offcanvas>
            </Fragment>
        );
    }

    return (
        <SideMenu></SideMenu>
    )
}

export default CusNavbar