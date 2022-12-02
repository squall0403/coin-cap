import React, { Fragment} from "react";
import Container from 'react-bootstrap/Container';
import CusNavbar from "./navbar";
import User from './user'

const FrontPage = () => {
    return (
        <Fragment>
            <Container>
                <CusNavbar></CusNavbar>
                <div className="space"></div>
                <User></User>
            </Container>
        </Fragment>
    )
}

export default FrontPage;