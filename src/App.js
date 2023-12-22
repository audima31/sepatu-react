import React from "react";
import "./assets/css/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import DetailProduct from "./components/DetailProduct/DetailProduct";
import Shop from "./components/Shop/Shop";
import Journey from "./components/Journey/Journey";
import Payment from "./components/Payment/Payment";
import Keranjang from "./components/Keranjang/Keranjang";
import "../src/assets/css/header.css";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import MobileModal from "./components/Keranjang/MobileModal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/product/detail/:id" element={<DetailProduct />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/journey" element={<Journey />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/keranjang" element={<Keranjang />}></Route>
        <Route path="/mobileModal" element={<MobileModal />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
