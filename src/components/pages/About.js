import React from "react";
import "../pages/About.css";
import photoLinda from "../images/AboutLinda.jpg";

import { Link } from "react-router-dom";
import usePageSEO from "../../hooks/usePageSEO";


function Aboutus() {


  usePageSEO({
    title: "À propos",
    description: "Linda Avlessi - Reactiserv",
    keywords:"formation commerciale contact telephone mail",
    ogTitle:"À propos",
    ogDescription:"Contactez moi pour des formations commerciales et accompagnement",
    ogImage:"http://example.com/image.jpg",
    ogUrl:"http://example.com/page1"

  })


  return (
    <div>
      <section className="py-4 bg-success">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-4 my-auto w-50">
              <h4>À propos</h4>
            </div>
            <div className="col-lg-6 col-md-8 my-auto w-50">
              <h6 className="float-end">
                <Link to="/home" className="text-dark">
                  {" "}
                  Accueil /
                </Link>{" "}
                À propos
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
             
                <img
                  className="col-12 col-md-6 col-lg-6 float-end aboutLindaPhoto shadow divAnimationAbout my-sm-5 img-fluid"
                  src={photoLinda}
                  alt="Linda Avlessi"
                  style={{width:490}}
                />
             

              <div className="col-12 col-md-6 my-5 p-auto presentation">
                <p>
                  Bonjour, je m'appelle Linda Avlessi, la gérante de REACTISERV.
                  J'ai débuté mon entreprise en septembre 2022 après huit années
                  d'expérience en tant qu'assistante ADV Export et commerciale
                  BtoB/BtoC.
                </p>

                <p>
                  Grâce à mes études en langues étrangères, je maîtrise
                  l'anglais, l'espagnol et l'italien, ce qui me permet de
                  travailler avec des entreprises internationales.
                </p>

                <p>
                  Mes valeurs, telles que la bienveillance et l'engagement,
                  guident mon travail. Mon objectif principal est d'aider les
                  dirigeants de TPE/PME en gérant les tâches administratives et
                  commerciales en période de flux tendus.
                </p>

                <p>
                  En dehors du travail, je suis passionnée par le théâtre et la
                  photographie. Ces passions ajoutent une touche dynamique à ma
                  personnalité et contribuent à mon engagement dans le
                  développement commercial et la formation.
                </p>

                <p>
                  En résumé, je m'engage à simplifier la vie des entrepreneurs
                  tout en contribuant à la croissance de leur entreprise. Mon
                  approche sérieuse, bienveillante et engagée est renforcée par
                  ma personnalité passionnée et curieuse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="timelineUp timeline-clippy timeline-rhombus m-auto my-5 d-md-block d-lg-none
"
      >
        <div class="container">
          <div class="row">
            <div className="my-5 fw-bold">
            <h1 className="my-5"> EN QUELQUES DATES</h1>
            </div>
            <div class="col-md-4 mb-3 pb-3 text-white">
              <div class="bulleUp">
                <h5>2013</h5>
                <div class="underline m-auto"></div>
                <div>Master Etudes Européennes & Relations Internationales</div>
              </div>
            </div>
            <div class="col-md-4 mb-3 pb-3 text-white">
              <div class="bulleUp">
                <h5>2014 – 2022</h5>
                <div class="underline m-auto"></div>
                <div>
                  Commerciale sédentaire BtoB, Assistante commerciale & ADV
                  France et Export
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 pb-3 text-white">
              <div class="bulleUp">
                <h5>2022</h5>
                <div class="underline m-auto"></div>
                <div>Création de REACTISERV</div>
              </div>
            </div>
            <div class="col-md-4 mb-3 pb-3 text-white">
              <div class="bulleUp">
                <h5>2024</h5>
                <div class="underline m-auto"></div>
                <div>Formation Copywriting et design thinking </div>
              </div>
            </div>
          </div>

          {/*       <!-- Add more columns and content for additional list items as needed --> */}
        </div>
      </section>

      <section class="timeline timeline-clippy timeline-rhombus col-12 d-none d-md-none d-lg-block my-5">
        <h1 className="text-center my-5"> EN QUELQUES DATES</h1>
        <ul>
          <li>
            <div className="bulle">
              <h5>2013</h5>
              <div className="underline"></div>

              <div> Master Etudes Européennes & Relations Internationales </div>
            </div>
          </li>
          <li>
            <div className="bulle">
              <h5>2014 – 2022</h5>
              <div className="underline"></div>
              <div>Coordinatrice commerciale, ADV France & Export</div>
            </div>
          </li>
          <li>
            <div className="bulle">
              <h5>2022</h5>
              <div className="underline"></div>
              <div>Création de REACTISERV </div>
            </div>
          </li>
          <li>
            <div className="bulle">
              <h5>2024</h5>
              <div className="underline"></div>
              <div>Formation Copywriting et design thinking </div>
            </div>
          </li>

          {/* more list items here */}
        </ul>
      </section>

      {/* Our Vision, mission and value*/}
      {/*  <VMC /> */}



    </div>
  );
}

export default Aboutus;
