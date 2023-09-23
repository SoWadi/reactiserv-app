import React from "react";
import VMC from "./inc/Vmc";
import photoLinda from "../images/AboutFoto.png";
import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <div>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-4 my-auto">
              <h4>About</h4>
            </div>
            <div className="col-lg-6 col-md-8 my-auto">
              <h6 className="float-end">
              <Link to="/home" className="text-dark">
                {" "}
                Home / 
              </Link>{" "}About</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section mt-5">
        <div className="container d-flex flex-column">
          <h5 className="main-heading">Qui suis-je ?</h5>
          <div className="underline"></div>
          <div>
            <img className="w-25 float-end mx-5" src={photoLinda}></img>
            <p>
              Dirigeante et fondatrice de l’entreprise Reactiserv, dont
              l’activité a débuté en septembre 2022. Après une licence en
              langues étrangères appliquées anglais/espagnol, ainsi qu’un master
              recherche Etudes Européennes et Relations Internationales, je me
              suis engagée dans l’assistanat administratif et commercial dans
              des PME principalement.
            </p>

            <p>
              Mes neufs années au sein du salariat dans les métiers de
              l’assistanat commercial et administratif à la fois sur le marché
              français et international, également en tant que commercial
              sédentaire dans le secteur du b to b et b to c, m’ont permis de
              développer des compétences et m’ont guidé vers l’entrepreunariat.
            </p>

            <p>
              J’ai pu suivre les commerciaux dans leurs activités en les
              accompagnant dans leur processus de ventes, ainsi que dans
              l’utilisation du CRM. (Hubspot, Sage, Salesforce, Odoo){" "}
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision, mission and value*/}
      {/*  <VMC /> */}
    </div>
  );
}

export default Aboutus;
