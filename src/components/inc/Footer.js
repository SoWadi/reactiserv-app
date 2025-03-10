import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoNav from "../images/LogoReactiserv.png";
import { faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <section className="section footer bg-dark text-white mt-5">
      {/* <hr/> */}
      <div className="container">
        <div className="row">
          <div className="col-md-4 px-5 py-5">
            <h5>Accès rapides</h5>
            <hr class="w-50" />
            <div>
              <Link to="/">Accueil</Link>
            </div>
            <div>
              <Link to="/about">À propos</Link>
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
                <span className="">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </span>{" "}
                +337 11 11 22 33
              </p>
            </div>
            <div>
              <p className="text-white mb-1">
                <span className="">
                  <FontAwesomeIcon icon={faAt} />
                </span>
                l.contact@gmail.com
              </p>
            </div>
            <div className="col-md-12">
              <hr className="w-25" />
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/company/reactiserv/"
                  target="open_blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="mr-3" />
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
