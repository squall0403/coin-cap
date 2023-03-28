import React from "react";
import { Route, Routes } from "react-router-dom";
import FrontPage from './components/frontPage'
import CourseApp from './components/courses/courseApp'
import BillApp from './components/bills/billApp'
import Editor from "./components/ultis/editor";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<FrontPage/>} />
        <Route exact path="/course/*" element={<CourseApp/>} />
        <Route exact path="/bill/*" element={<BillApp/>} />
        <Route exact path="/ck" element={<Editor/>} />
      </Routes>
    </div>
  );
}

export default App;
