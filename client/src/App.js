import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Homepage from "./pages/Home";
import Sanitory from "./pages/Sanitory"; 
import AddToCart from "./pages/Cart";
import Tiles from "./pages/Tiles";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sanitory" element={<Sanitory />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/tiles" element={<Tiles/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
    
      </Routes>
    </Router>
  );
};

export default App;
