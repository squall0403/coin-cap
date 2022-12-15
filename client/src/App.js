import React from "react";
import { Route, Routes } from "react-router-dom";
import FrontPage from './components/frontPage'
import CourseApp from './components/courses/courseApp'

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<FrontPage/>} />
        <Route exact path="/course/*" element={<CourseApp/>} />
      </Routes>
    </div>
  );
}

export default App;
