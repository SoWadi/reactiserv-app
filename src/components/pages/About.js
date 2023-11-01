import React from "react";
import "../pages/About.css";
import photoLinda from "../images/AboutFoto2-removebg-preview.png";

import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <div>
      <section className="py-4 bg-success">
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
                </Link>{" "}
                About
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section mt-5">
        <div className="container d-flex flex-column">
          <h5 className="main-heading">Qui suis-je ?</h5>
          <div className="underline"></div>
          <div className="row">
            <div>
              <div className=" ">
                <img
                  className="col-12 col-md-12 col-lg-6 float-end  aboutLindaPhoto shadow divAnimationAbout"
                  src={photoLinda}
                ></img>
              </div>

              <div className="col-12 col-md-6 my-5 p-auto text-white presentation">
                <p>
                  Linda Tadjer, gérante de l’entreprise REACTISERV, dont
                  l’activité a débuté en septembre 2022 après une expérience de
                  huit années dans le salariat en tant qu’assistante ADV Export,
                  et commerciale sédentaire BtoB/BtoC. </p>
                  <p>
                  Mes études en langues
                  étrangères me permettent aujourd’hui de travailler pour des
                  entreprises étant implantées sur le marché international, ou
                  souhaitant se développer en ce sens. Je pratique l’anglais,
                  l’espagnol et l’italien. </p>
                  <p>
                  Mon objectif premier est de soulager
                  les dirigeants des TPE/PME en les aidant sur la gestion des
                  tâches administratives et commerciales, que ce soit en période
                  de flux tendus ou pour un accompagnement à moyen terme. </p>
                  <p>
                  Je suis une personne enjouée, avec la soif d’apprendre
                  et de découvrir différents univers. Je suis passionnée par ce
                  que j’entreprends, que ce soit dans la vie professionnelle et
                  personnelle. Amatrice de théâtre et de photographie, je serai
                  toujours en éveil pour mettre le focus sur ce qui est
                  important dans le développement de votre entreprise.</p>
                  <p>
                  Mon
                  expérience avérée dans le développement commercial, me permet
                  aujourd’hui d’animer des formations commerciales. Je suis
                  partenaire du centre de formation SP TRAINING certifié
                  Qualiopi. </p>
                  <p>
                  Ma mission, vous l’aurez compris, est de vous
                  soulager tout en développant la croissance économique de votre
                  entreprise.
                </p>
                {/* <p>
                  Dirigeante et fondatrice de l’entreprise Reactiserv, dont
                  l’activité a débuté en septembre 2022. Après une licence en
                  langues étrangères appliquées anglais/espagnol, ainsi qu’un
                  master recherche Etudes Européennes et Relations
                  Internationales, je me suis engagée dans l’assistanat
                  administratif et commercial dans des PME principalement.
                </p>

                <p>
                  Mes neufs années au sein du salariat dans les métiers de
                  l’assistanat commercial et administratif à la fois sur le
                  marché français et international, également en tant que
                  commercial sédentaire dans le secteur du b to b et b to c,
                  m’ont permis de développer des compétences et m’ont guidé vers
                  l’entrepreunariat.
                </p>

                <p>
                  J’ai pu suivre les commerciaux dans leurs activités en les
                  accompagnant dans leur processus de ventes, ainsi que dans
                  l’utilisation du CRM. (Hubspot, Sage, Salesforce, Odoo){" "}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision, mission and value*/}
      {/*  <VMC /> */}
    </div>
  );
}

export default Aboutus;
