import React from "react";
import "./App.css";
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home"
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import ServiceX from "./components/pages/services/service1"
import ServiceAdministratif from "./components/pages/services/serviceAdm"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/inc/Footer";
import Atelier from "./components/pages/services/atelierProspection";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Place your Navbar component outside of the Routes */}
        <Navbar />
        
        <main className="flex-grow-1">
        <Routes>

          <Route exact path="/" 
          element={<Home />} />

          <Route path="/home"
          element={<Home />} />         

          <Route path="/about"
          element={<About />} />

          <Route path="/contact" 
          element={<Contact />} />
 

          <Route path="/service1" 
          element={<ServiceX />} />

          <Route path="/serviceAdm" 
          element={<ServiceAdministratif />} />

          <Route path="/atelierProsp" 
          element={<Atelier />} />


        </Routes>
</main>
        <Footer/>
      </div>

    </Router>

  );
}

export default App;
