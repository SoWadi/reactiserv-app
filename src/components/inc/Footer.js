import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoNav from "../images/LogoReactiserv.png";
import {
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <section className="section footer bg-dark text-white py-4">
      <hr></hr>
      <div className="container">
        <div className="row">
          
          <div className="col-md-4 px-5 py-5">
            <h5>Accès rapides</h5>
            <hr class="w-50"/>
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
          <div className="col-md-4 px-5 py-5">
            <h5>Informations de contact</h5>
            <hr class="w-50" />
            <div>
              <p className="text-white mb-1">
                <span className="px-3">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </span>{" "}
                07 88 13 33 03
              </p>
            </div>
            <div>
              <p className="text-white mb-1">
                <span className="px-3">
                  <FontAwesomeIcon icon={faAt} />
                </span>
                l.avlessi@reacti-serv.com
              </p>
            </div>
            <div className="col-md-12">
              <hr className="w-25" />
              <div className="social-icons">
                <a href="https://www.linkedin.com/company/reactiserv/" target="open_blank">
                  <FontAwesomeIcon icon={faLinkedinIn} className="mr-3 mx-3" />
                </a>
{/*                 <a href="#">
                  <FontAwesomeIcon icon={faInstagram} className="mr-3 mx-3" />
                </a> */}
              </div>
            </div>
          </div>

          <div className="col-md-4 px-5">
            <div>
              <Link to="/" className="">
                <img
                  className="LogoNav mt-4"
                  src={LogoNav}
                  alt="Reactiserv"
                ></img>
              </Link>
            </div>
          </div>






        </div>
      </div>
    </section>
  );
}
export default Footer;
