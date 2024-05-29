import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Team from "./components/Team";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import "../public/assets/styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
