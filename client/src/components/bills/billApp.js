import React, { Fragment } from 'react'
import { Route, Routes } from "react-router-dom";

import BillList from '../bills/billList';
import NavBar from '../ultis/navbar';
import Footer from '../ultis/footer';

const BillApp = () => {
  return (
    <Fragment>
    <NavBar></NavBar>
    <Routes>
        <Route exact path="/" element={<BillList/>} />
    </Routes>
    <Footer></Footer>
</Fragment>
  )
}

export default BillApp