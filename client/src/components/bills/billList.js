import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { apiURL } from '../ultis/constants'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';

const BillList = () => {
    const [bills, setBills] = useState([])
    useEffect(() => {
        const getBills = async () => {
            try {
                const response = await axios.get(`${apiURL}/bill`)
                setBills(response.data);
                return;
            } catch (error) {
                console.log(error);
            }
        }
        getBills()
    }, [bills.length])

    const BillListMap = () => {
        return bills.map((bill) => {
            return (
                <tr>
                    <td>{bill.bill_id}</td>
                    <td>{bill.bill_url}</td>
                    <td>{bill.bill_status}</td>
                </tr>
            )
        });
    }

    return (
        <Container>
            <h1>Danh sách đơn hàng</h1>
            <Button variant="primary" style={{ display: "flex" }}>Thêm <span class="material-icons">
                add
            </span></Button>{' '}
            <div className='spacer'></div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Đường link</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    <BillListMap />
                </tbody>
            </Table>
        </Container>

    )
}

export default BillList