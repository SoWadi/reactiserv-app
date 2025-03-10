import React from "react";
import { Link } from "react-router-dom";
import LogoNav from "../images/LogoReactiserv.png";
import { NavDropdown } from "react-bootstrap";
import "../../../src/App.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom border-success-subtle sticky-top">
      <div className="container containerNav">
        {/*                     <a className="" href="/">Navbar</a> */}
        <div className="LogoNav">
          <Link to="/" className="navbar-brand">
            <img src={LogoNav} alt="Reactiserv"></img>
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item navLink">
              <Link to="/home" className="nav-link active">
                Accueil
              </Link>
            </li>
            {/* <li className="nav-item navLink">
              <Link to="/formations" className="nav-link active">
              Nos formations
              </Link>
            </li> */}

            <NavDropdown
              className="border border-0"
              title="Nos solutions"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#service2">
                <Link
                  to="/formations"
                  className="nav-link active"
                >
                  Formations commerciales
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/strategie-commerciale" className="nav-link active">
                  Stratégie commerciale
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/service-administratif" className="nav-link active">
                  Assistanat administratif
                </Link>
              </NavDropdown.Item>

            </NavDropdown>


{/*             <li className="nav-item">
              <Link to="/strategie-commerciale" className="nav-link active">
              Stratégie commerciale
              </Link>
            </li> */}


            <li className="nav-item">
              <Link to="/about" className="nav-link active">
                À propos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active">
                Contact
              </Link>
            </li>


          
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
