import React, { Fragment } from 'react'
import CourseList from './courseList';
import CourseDetail from './courseDetail';
import { Route, Routes } from "react-router-dom";
import NavBar from '../ultis/navbar';
import Footer from '../ultis/footer';

const CourseApp = () => {
    return (
        <Fragment>
            <NavBar></NavBar>
            <Routes>
                <Route exact path="/" element={<CourseList />} />
                <Route exact path="/view/:id" element={<CourseDetail />} />
            </Routes>
            <Footer></Footer>
        </Fragment>
    )
}

export default CourseApp