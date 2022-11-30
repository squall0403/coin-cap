import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios'
import { apiURL } from '../utilities/constant'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const User = () => {
    const [assets, setAssets] = useState([]);
    useEffect(() => {
        async function getAssets() {
            try {
                const response = await axios.get(`${apiURL}/users`)
                setAssets(response.data);
            } catch (error) {
                console.log(error.message);
            }

        }
        getAssets();
        console.log(assets);
        return;
    }, [assets.length])
    function userItem() {
        return assets.map((asset) => {
            return (
                <tr key={asset.id}>
                    <td>{asset.name}</td>
                    <td>{asset.username}</td>
                    <td>{asset.email}</td>
                    <td>{asset.phone}</td>
                    <td>{asset.company.name}</td>
                </tr>
            )
        })
    }
    return (
        <Fragment>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Phone</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userItem()}
                    </tbody>
                </Table>
            </Container>
        </Fragment>
    )
}

export default User;