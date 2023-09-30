import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faBilibili,
  faWhatsapp,

} from "@fortawesome/free-brands-svg-icons";
import { faAt, faEnvelopeCircleCheck, faEnvelopeOpenText, faEnvelopesBulk, faMailReply } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <section className="section footer bg-dark text-white py-4">
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
              <p className="text-white mb-1">
                <span className="px-3"><FontAwesomeIcon icon={faWhatsapp} /></span> 07 88 13 33 03</p>         
            </div>
            <div>
              <p className="text-white mb-1">
                <span className="px-3"><FontAwesomeIcon icon={faAt} /></span>
                l.avlessi@reacti-serv.com</p>
            </div>
            <div className="col-md-12">

              <hr className="w-25"/>
              <div className="social-icons">
                <a href="https://www.linkedin.com/company/reactiserv/">
                  <FontAwesomeIcon icon={faLinkedinIn} className="mr-3 mx-3" />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} className="mr-3 mx-3"/>
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
