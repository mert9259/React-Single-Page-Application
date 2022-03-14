import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "../home/home";
import AddLink from "../addLink/addLink";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/addLink" element={<AddLink />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
