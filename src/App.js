import React from "react";
import "./App.css";
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home"
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/inc/Footer";

function App() {
  return (
    <Router>
      <div>
        {/* Place your Navbar component outside of the Routes */}
        <Navbar />
        
        <Routes>

          <Route exact path="/" 
          element={<Home />} />

          <Route path="/home"
          element={<Home />} />         

          <Route path="/about"
          element={<About />} />

          <Route path="/contact" 
          element={<Contact />} />
        </Routes>

        <Footer/>
      </div>

    </Router>

  );
}

export default App;
