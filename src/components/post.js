import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios'
import { apiURL } from '../utilities/constant'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import LoadingSpinner from './spinner'

const User = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [assets, setAssets] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        async function getAssets() {
            try {
                const response = await axios.get(`${apiURL}/posts`)
                setAssets(response.data);
                    setIsLoading(false)
            } catch (error) {
                console.log(error.message);
                setIsLoading(false)
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
                    <td>{asset.id}</td>
                    <td>{asset.title}</td>
                    <td>{asset.body}</td>
                </tr>
            )
        })
    }
    const loadUser = () => {
        return (
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userItem()}
                    </tbody>
                </Table>
            </Container>
        )
    }

    return (
        <Fragment>{isLoading ? <LoadingSpinner /> : loadUser()}</Fragment>
    );

}

export default User;