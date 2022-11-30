import React, { Fragment, useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import User from './user'
// import Toast from './toast'
import Carousel from "./carousel";

const FrontPage = () => {
    return (
        <Fragment>
            {/* <Toast></Toast> */}
            <Container>
                <Carousel></Carousel>
                <div className="space"></div>
                <User></User>
            </Container>
        </Fragment>
    )
}

export default FrontPage;