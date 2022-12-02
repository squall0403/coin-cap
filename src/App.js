import React from "react";
import { Route, Routes } from "react-router-dom";
import FrontPage from "./components/frontpage";

import "./style.scss";
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js';
import Todo from "./components/todo";

const App = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route exact path="/" element={<FrontPage />} />
          <Route exact path="/todo" element={<Todo />} />
        </Routes></div>
    </div>
  );
};

export default App;