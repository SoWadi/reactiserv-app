import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section className="section footer bg-dark text-white mt-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 px-5">
            <h6>À propos</h6>
            <hr />
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, dapibus
              parturient imperdiet metus risus facilisis egestas maecenas,
              laoreet inceptos bibendum lobortis fames duis.
            </p>
          </div>
          <div className="col-md-4 px-5">
            <h6>Accès rapides</h6>
            <hr />
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/contact">Contact</Link>
            </div>

          </div>
          <div className="col-md-4 px-5">
            <h6>Informations de contact</h6>
            <hr />
            <div>
              <p className="text-white mb-1"> 07 88 13 33 03</p>
            </div>
            <div>
              <p className="text-white mb-1">l.avlessi@reacti-serv.com</p>
            </div>
            <div className="col-md-12">
            
              <div className="social-icons">
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} className="mr-3 mx-3"/>
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} className="mr-3 mx-3" />
                </a>
                <a href="https://www.linkedin.com/company/reactiserv/">
                  <FontAwesomeIcon icon={faLinkedinIn} className="mr-3 mx-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
