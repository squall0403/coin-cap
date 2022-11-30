import React, { Fragment, useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import User from './user'
import Post from "./post";

const FrontPage = () => {
    return (
        <Fragment>
            <Post></Post>
            <Container>
                <div className="space"></div>
                <User></User>
            </Container>
        </Fragment>
    )
}

export default FrontPage;