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
          <div className="text-center pb-5">
            <div className="mx-auto text-white w-75 py-5">
              <p className="text-center w-100 fs-4 mb-5">
                Ma mission est de vous accompagner dans la création d'un pitch
                percutant et vous fournir les outils nécessaires pour exceller
                dans vos prises de rendez-vous téléphoniques en toute autonomie.
              </p>
          <div className="row justify-content-start mx-auto">
            <img
              className="mx-auto mt-5 w-50 object-fit-fill"
              src={spPartnerPhoto}
            />
          </div>
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

      {/* ---------------------------------------------------------------- ACCORDION TARIFS ----------------------------------------------------------------*/}
      <div
        class="accordion accordion-flush mx-auto my-5 w-50"
        id="accordionFlushExample"
        data-bs-theme="dark"
      >
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed text-center accordionButtonCustom"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <span className="text-center">
                <h4>Tarifs</h4>
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="container mt-4 tarifContainer ">
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
  );
}

export default Atelier;
