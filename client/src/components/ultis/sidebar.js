import React, { Fragment } from 'react'
import Container from 'react-bootstrap/esm/Container'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <Fragment>
            <Container className='related_links'>
                <h4>Ralated Links</h4>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Link>Palestine Municipal Airport</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Link>Iaşi Airport</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Link>Brockville - Thousand Islands</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Link>Araguaína Airport</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Link>Rock Sound Airport</Link>
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        </Fragment>
    )
}

export default SideBar