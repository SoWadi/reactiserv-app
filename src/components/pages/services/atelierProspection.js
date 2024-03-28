import React from "react";
import { Link } from "react-router-dom";
import "./formations.css";
import "../services/formations.css";
import spPartnerPhoto from "../../images/spPartner.jpg";
/* import photoLinda from "../images/AboutFoto2-removebg-preview.png"; */

function Atelier() {
  return (
    <div>
      <section className="py-4 mb-5 bg-success">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 my-auto">
              <h4>Atelier de formation commerciale :</h4>
            </div>
            <div className="col-lg-6 my-auto">
              <h6 className="float-end">
                <Link to="/home" className="text-dark">
                  {" "}
                  Home /
                </Link>{" "}
                Atelier sur la prospection commerciale
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section my-5">
        <div className="container d-flex flex-column">
          <h1 className="main-heading">Formations commerciales</h1>
          <div className="underline"></div>
          <div className="pb-5">
            <div className="mx-auto w-75 py-5">
              {/*  Groupe contenu introduction */}
              <p className="w-100 fs-4 my-5">
                Ma mission est de vous accompagner dans la création d'un pitch
                percutant et vous fournir les outils nécessaires pour exceller
                dans vos prises de rendez-vous téléphoniques en toute autonomie.
              </p>

              {/*  Paragraphe # : Expérience professionnelle */}
              <p className="lh-base p-2">
                J'ai débuté les campagnes de phoning à l'université, en tant que
                job étudiant à l'<strong>ESSEC Business School</strong>, puis chez <strong>Direct Energie </strong> 
                en job d'été. Pendant huit années dans le salariat, occupant des
                postes de commercial sédentaire, ADV ou encore coordinatrice
                commerciale, j'ai toujours été amenée à appeler les prospects,
                susciter l'intérêt et prendre des rendez-vous qualifiés, allant
                de la TPE aux grands comptes.
              </p>

              {/* Paragraphe 1 : Introduction */}
              <p className="lh-base p-2">
                Je propose des formations commerciales avec l'agence de
                formations à la vente{" "}
                <strong>
                  <a
                    className="text-warning"
                    href="https://www.sptraining.fr/"
                    target="_blank" rel="noreferrer" 
                  >
                    Stephane Perriat Training
                  </a>
                </strong>
                , certifiée <strong>Qualiopi</strong>. J'anime des sessions sur la réalisation du
                pitch et la prise de rendez-vous téléphonique, en m'appuyant sur
                mon expérience métier.
              </p>

              {/*  Lien vers le site web de l'agence */}
              <p className="lh-base p-2">
                Consultez notre site web pour en savoir plus :{" "}
                <a
                  className="text-warning"
                  href="https://www.sptraining.fr/"
                  target="_blank" 
                  rel="noreferrer" 
                >
                  Stephane Perriat Training
                </a>
              </p>

              {/*  Paragraphe 2 : Offre de Coaching Phoning */}
              <p className="lh-base p-2">
                Mise en place de l'offre <strong>Coaching Phoning</strong>, une
                mise en pratique post-formation: je vous accompagnerai à <strong>oser
                prendre votre téléphone, à passer les barrages, à aller chercher
                du rendez-vous qualifié </strong> afin de développer votre chiffre
                d'affaires.
              </p>

              <p className="mt-5">
                Chaque programme a une durée d'une 1/2 journée et traite d'une
                spécialité du cycle de vente:
              </p>
            </div>
            <div className="mx-auto mb-5 w-75">
              <div
                class="accordion accordion-flush"
                id="accordionFlushExample"
                data-bs-theme="dark"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                      style={{backgroundColor: "#017d58"}}
                    >
                      Construire efficacement son Pitch
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Objectifs : à l’issue de la formation, la personne est en
                      capacité de présenter efficacement son activité, sa
                      société en quelques phrases. Ayant connaissance des
                      principes de communication, elle sera capable d’ajuster en
                      fonction de son interlocuteur et de mettre l’accent sur
                      les mots clé.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                      style={{backgroundColor: "#017d58"}}
                    >
                      Prendre RDV par téléphone
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Objectifs : à l’issue de la formation, la personne est en
                      capacité de définir ses objectifs de prospection.
                      D’identifier ses cibles contacts froids et chauds.
                      D’utiliser une trame de prise de rdv rapide et efficace.
                      De passer un barrage et en faire un allié.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                      style={{backgroundColor: "#017d58"}}
                    >
                      Développer son business en réseaux
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Objectifs : à l’issue de la formation, la personne est en
                      capacité d’identifier les réseaux nécessaires à son
                      développement commercial. De mettre en place la bonne
                      stratégie et utiliser les bonnes pratiques.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                      style={{backgroundColor: "#017d58"}}
                    >
                      Faire exprimer les besoins
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      {" "}
                      Objectifs : à l’issue de la formation, la personne est en
                      capacité de poser un maximum de questions ouvertes afin de
                      laisser l’interlocuteur s’exprimer. Ecouter, reformuler et
                      relancer pour finalement synthétiser et faire valider les
                      besoins auxquels l’offre pourra répondre
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                      style={{backgroundColor: "#017d58"}}
                    >
                      Développer les besoins
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Objectifs : à l’issue de la formation, la personne est en
                      capacité de poser des questions plus ciblées notamment sur
                      tous les sujets problématiques du client. Elle comprendra
                      le fonctionnement de la balance du changement et la
                      stratégie à adopter pour les clients difficiles.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseSix"
                      aria-expanded="false"
                      aria-controls="flush-collapseSix"
                      style={{backgroundColor: "#017d58"}}
                    >
                      Argumenter et conclure ses ventes
                    </button>
                  </h2>
                  <div
                    id="flush-collapseSix"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Objectifs : à l’issue de la formation, la personne est en
                      capacité de construire son argumentation efficacement en
                      fonction des attentes du client. Elle pourra traiter les
                      dernières objections et se fixer des objectifs de
                      conclusion.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseSeven"
                      aria-expanded="false"
                      aria-controls="flush-collapseSeven"
                      style={{backgroundColor: "#017d58"}}
                    >
                      Les clés de la négociation
                    </button>
                  </h2>
                  <div
                    id="flush-collapseSeven"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Objectifs : à l’issue de la formation, la personne est en
                      capacité de connaître les règles de la négociation,
                      d’identifier tous les points négociables et leurs impacts
                      et de bien négocier pour trouver une issue favorable aux 2
                      parties..
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseEight"
                      aria-expanded="false"
                      aria-controls="flush-collapseEight"
                      style={{backgroundColor: "#017d58"}}
                    >
                      Optimiser son profil Linkedin
                    </button>
                  </h2>
                  <div
                    id="flush-collapseEight"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Objectifs : à l’issue de la formation, la personne est en
                      capacité de connaître les chiffres clé du réseau Linkedin.
                      D’optimiser son profil afin d’être plus visible, attractif
                      et répondre aux règles du réseau.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseNine"
                      aria-expanded="false"
                      aria-controls="flush-collapseNine"
                      style={{backgroundColor: "#017d58"}}
                    >
                      Intensifier son approche Linkedin
                    </button>
                  </h2>
                  <div
                    id="flush-collapseNine"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      {" "}
                      Objectifs : à l’issue de la formation, la personne est en
                      capacité de rechercher et trouver des contacts cibles de
                      différentes manières. De contacter, commenter et publier
                      pour toucher des prospects et démarrer une relation
                      commerciale ou professionnelle (partenariat,
                      recommandation…).
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTen"
                      aria-expanded="false"
                      aria-controls="flush-collapseTen"
                      style={{backgroundColor: "#017d58"}}
                    >
                      S’adapter à ses interlocuteurs
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTen"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      {" "}
                      Objectifs : à l’issue de la formation, la personne est en
                      capacité d’identifier les 4 grands profils de
                      personnalité, leurs caractéristiques et leurs modes de
                      décision. Il saura faire preuve d’adaptabilité pour gagner
                      en efficacité.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- ENSEMBLE TARIFS & PHOTO ----------------------------------------------------*/}

      <div className="d-flex flex-column flex-lg-row-reverse justify-content-lg-center w-75 m-auto">
        {/* ---------------------------------------------------------------- ACCORDION TARIFS ----------------------------------------------------------------*/}
        <div className="row m-auto position-sticky">
          <img
            className="mx-auto w-50 object-fit-fill"
            alt="sp-partner"
            src={spPartnerPhoto}
          />
        </div>

        {/* ---------------------------------------------------------------- ACCORDION TARIFS ----------------------------------------------------------------*/}
        <div
          className="row accordion accordion-flush m-auto m-lg-5 my-5 w-50"
          id="accordionFlushExample"
          data-bs-theme="none"
        >
          <div class="accordion-item"
            style={{backgroundColor:"transparent"}}
          >
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed text-center accordionButtonCustom"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={{backgroundColor: "#017d58", color:"white"}}
              >
                <span className="text-center mx-auto">
                  <h4>Tarifs</h4>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
              style={{backgroundColor: "#017d58", margin:"auto"}}
            >
              <div class="container mt-4 tarifContainer">
                {/* <h2>Liste de Tarifs</h2> */}
                <table class="table table-bordered table-custom custom-table">
                  <thead>
                    <tr>
                      <th>Quantité</th>
                      <th>Tarif HT</th>
                      <th>Tarif TTC</th>
                    </tr>
                  </thead>
                  <tbody class="even">
                    <tr>
                      <td>1</td>
                      <td>390,00 €</td>
                      <td>468,00 €</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>780,00 €</td>
                      <td>936,00 €</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>1 170,00 €</td>
                      <td>1 404,00 €</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>1 560,00 €</td>
                      <td>1 872,00 €</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>1 790,00 €</td>
                      <td>2 148,00 €</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>2 090,00 €</td>
                      <td>2 508,00 €</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>2 350,00 €</td>
                      <td>2 820,00 €</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>2 610,00 €</td>
                      <td>3 132,00 €</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>2 850,00 €</td>
                      <td>3 420,00 €</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>3 090,00 €</td>
                      <td>3 708,00 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Atelier;
