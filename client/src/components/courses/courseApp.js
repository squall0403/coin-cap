import React from 'react'
import CourseList from './courseList';
import CourseDetail from './courseDetail';
import { Route, Routes } from "react-router-dom";

const CourseApp = () => {
    return (
        <Routes>
            <Route exact path="/" element={<CourseList />} />
            <Route exact path="/view/:id" element={<CourseDetail />} />
        </Routes>
  )
}

export default CourseApp