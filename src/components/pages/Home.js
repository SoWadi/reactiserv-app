import React from "react";
import "./animatedSquare.css";

import VMC from "./incVMC/Vmc";

import { Link } from "react-router-dom";
import GestionAdministrative from "../images/Gestion_administrative.jpg";
import KPIs from "../images/KPIs.jpg";
import FormationCo from "../images/Formation.jpg";

import usePageSEO from "../../hooks/usePageSEO";

function Home() {
  usePageSEO({
    title: "Reactiserv - Formations et Accompagnement commercial",
    description:
      "Reactiserv- Votre partenaire en formation, administration des Ventes France & Export",
    keywords:
      "Développement commercial, CRM, KPIs, ventes, administration, prospection",
    ogTitle: "Reactiserv - Formations et Accompagnement commercial",
    ogDescription:
      "Reactiserv- Votre partenaire en formation, administration des Ventes France & Export",
    ogImage: "http://example.com/image.jpg",
    ogUrl: "http://example.com/page1",
  });

  return (
    <div  id="hero">
      {/*  <Slider /> */}

      {/*      <div className="divAnimation"></div> */}

      <div class="areaHome">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <section className="section my-5 divAnimation">
          <div className="container" >
            <div className="row">
              <div className="col-md-12 py-5 my-auto text-center d-flex flex-column">
                {/* <h1 className="main-heading">
                  
                  Linda Avlessi
                  <hr className="w-25 mx-auto" />
                </h1> */}
                <h1>
                  Conseil en strategie commerciale et formation à la vente
                  {/* Simplifier vos opérations commerciales. */}
                </h1>
                <div className="underline mx-auto"></div>
                <p className=" p-4">
                  Seul on va plus vite, ensemble on va plus loin.
                </p>
                {/*            <Link to="/about" className="btn btn-success w-25 shadow my-5">
                {" "}
                Read more
              </Link>{" "} */}
                <a
                  className="my-auto mx-auto py-2 px-4 my-5 enSavoirPlusBtn"
                  href="#more-services"
                >
                  {" "}
                  En savoir plus
                </a>{" "}
              </div>
              {/* FOTO ABOUT/HOME */}
              {/*           <div className="col-md-6 my-5">
            <img className="w-100" src={PhotoHome} />
          </div> */}
            </div>
          </div>
        </section>
      </div>
      {/* <section>{<VMC />}</section> */}
      <section className="section mb-5" id="more-services">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center mt-5">
              <h3 className="main-heading">Nos solutions</h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="Cards">
              <div className="cardCustom align-self-lg-start zoomCards">
                <div className="card shadow">
                  <img
                    src={FormationCo}
                    className="w-100 border-bottom-c"
                    alt="Services"
                  />

                  <div className="card-body">
                    <h6>Formation commerciale</h6>
                    <div className="underline"></div>
                    <p className="text-white">
                      Maximisez vos compétences de vente pour augmenter la
                      performance de votre équipe et stimuler la croissance de
                      votre entreprise.
                    </p>
                  </div>
                  <Link
                    to="/formations"
                    className="enSavoirPlusCard"
                  >
                    En savoir plus{" "}
                  </Link>
                </div>
              </div>

              <div className="cardCustom align-self-lg-center zoomCards">
                <div className="card shadow">
                  <img
                    src={KPIs}
                    className="w-100 border-bottom-c"
                    alt="Services"
                  />

                  <div className="card-body">
                    <h6>Stratégie commerciale</h6>
                    <div className="underline"></div>
                    <p className="text-white">
                      Je vous accompagne sur la stratégie commerciale, pour une
                      croissance efficace de votre entreprise.
                    </p>
                  </div>
                  <Link
                    to="/strategie-commerciale"
                    className="enSavoirPlusCard"
                  >
                    En savoir plus{" "}
                  </Link>
                </div>
              </div>
              <div className="cardCustom align-self-lg-end zoomCards">
                <div className="card shadow">
                  <div className="divGestAdm">
                    <img
                      src={GestionAdministrative}
                      className="w-100 border-bottom-c"
                      alt="Services"
                    />
                  </div>
                  <div className="card-body">
                    <h6>Gestion administrative</h6>
                    <div className="underline"></div>
                    <p className="text-white">
                      Optimisez votre organisation grâce à mes services de
                      gestion administrative sur mesure.
                    </p>
                  </div>
                  <Link
                    to="/service-administratif"
                    className="enSavoirPlusCard"
                  >
                    En savoir plus{" "}
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="linkedinWidget mt-5">
              <h1 className="m-5"> Mon actu:</h1>
              <iframe
                src="https://a20f1c757d10487a8a5c5d9017db1c89.elf.site"
                width="100%"
                height="400"
                frameborder="0"
              ></iframe>
            </div>
 */}
            {/*       <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
<div class="elfsight-app-a20f1c75-7d10-487a-8a5c-5d9017db1c89" data-elfsight-app-lazy></div> */}
          </div>
        </div>
      </section>
<div className="d-flex my-5 h-75">
      <a
                  className="my-auto mx-auto py-2 px-4 my-5 enSavoirPlusBtn"
                  href="#hero"
                >
                  {" "}
                  Retour en haut de page
                </a>{" "}
                </div>
    </div>
  );
}

export default Home;
