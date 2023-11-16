import React from "react";
import "./assets/css/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import DetailProduct from "./components/DetailProduct/DetailProduct";
import Shop from "./components/Shop/Shop";
import Journey from "./components/Journey/Journey";
import Payment from "./components/Payment/Payment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/product/detail/:id" element={<DetailProduct />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/journey" element={<Journey />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
