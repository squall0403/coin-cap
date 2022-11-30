import React from "react";
import { Route, Routes } from "react-router-dom";
import FrontPage from "./components/frontpage";

import "./index.css";
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<FrontPage />} />
        </Routes></div>
    </div>
  );
};

export default App;