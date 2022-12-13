import React from "react";
import { Route, Routes } from "react-router-dom";
import FrontPage from './components/frontPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<FrontPage/>} />
      </Routes>
    </div>
  );
}

export default App;
