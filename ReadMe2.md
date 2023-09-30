import React from "react";
import { Link } from "react-router-dom";

function Contactus() {
  return (
    <div>
      <section className="py-4 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Contact</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">
              <Link to="/home" className="text-dark">
                {" "}
                Home / 
              </Link>{" "}Contact</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container w-75">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                {/* <div className="col-md-6 border-right">
                    <h6>Contact Form</h6>
                    <hr/>
                    <div className="form-group">
                        <label className="mb-1" for="">Full name</label>
                        <input type="text" className="form-control" name="" placeholder="jhgkg"></input>
                    </div>
                    <div className="form-group">
                        <label className="mb-1" for="">Phone number</label>
                        <input type="text" className="form-control" name="" placeholder="jhgkg"></input>
                    </div>
                    <div className="form-group">
                        <label className="mb-1" for="">Email:</label>
                        <input type="text" className="form-control" name="" placeholder="jhgkg"></input>
                    </div>
                    <div className="form-group">
                        <label className="mb-1" for="">Message</label>
                        <textarea rows="3" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <button  type="button" className="btn btn-success shadow w-100 py-3">Send Message</button>
                    </div>
                </div> */}
                <div className="col-md-12">
                    <h6>Adress Information:</h6>
                    <div className="underline"></div>
                    <p>
                      carrer blabla, #xx - 08000, BCN
                    </p>
                    <p>
                      Phone: 555 555 555
                    </p>
                    <p>
                      Email: email@domain.es
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactus;


//////////////////////


import React from "react";
import VMC from "../inc/Vmc";

function service1() {
  return (
    <div>
      <section className="py-4 mb-5 bg-success">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-4 my-auto">
              <h6>Accompagnement sur la stratégie commerciale</h6>
            </div>
            <div className="col-lg-6 col-md-8 my-auto">
              <h6 className="float-end">Home / Stratégie commerciale</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section mt-5 h-100">
        <div className="container">
          <h1 className="main-heading">
            Accompagnement sur la stratégie commerciale
          </h1>
          <div className="underline"></div>
          {/*  <div className="row"> */}
          {/*             <img className="w-25 float-end mx-5" src={photoLinda}></img> */}
          <div className="mt-5 articlesStrategieCommerciale grid gap-3">
            <article className=" col-12 zoomCards ">
              <h3>Commerciale - Apporteur d'affaires</h3>
              <ul>
                <p>
                  Vente en direct par téléphone d'un service ou d'un produit
                </p>
                <p>Développement de nouvelles affaires</p>
                <p>
                  Qualification de leads générés par les campagnes sur les
                  réseaux sociaux
                </p>
                <p>Création de base de données pour tout type de clients</p>
              </ul>
            </article>

            <article className="col-12 zoomCards">
              <h3>Conseil & Suivi Clients</h3>
              <ul>
                <p>
                  Accompagnement sur l'exploitation et l'optimisation d'un CRM
                </p>
                <p>
                  Réalisation de rapports pour les KPIs (Key Performance
                  Indicators)
                </p>
                <p>Amélioration des processus internes</p>
                <p>Analyse des ventes</p>
              </ul>
            </article>

            <article className="col-12 zoomCards">
              <h3>Définition de la stratégie commerciale à adopter</h3>
              <ul>
                <p>
                  Accompagnement sur la mise en place d’un CRM : amélioration de
                  l’interface avec création de listes, création de template,
                  création de comptes et contacts, création et suivi des devis,
                  accompagnement des équipes à l’utilisation de l’outil
                </p>
                <p>
                  Création d’un emailing, d’un pitch de présentation commercial
                </p>
              </ul>
            </article>
          </div>
        </div>
        {/*  </div> */}
      </section>
    </div>
  );
}

export default service1;

/* 
Accompagnement sur la stratégie commerciale :

Définition de la stratégie commerciale à adopter

Accompagnement sur la mise en place d’un CRM : amélioration de l’interface avec création de listes, création de template, création de comptes et contacts, création et suivi des devis, accompagnement des équipes à l’utilisation de l’outil

Création d’un emailing, d’un pitch de présentation commercial */


//////////////////////////////

//////////////////////////////

//////////////////////////////

CARDS SECTION COMERCIALE:


<div class="container containerStrategieCommerciale px-auto">
<div className="row ">
  {" "}
  {/* d-flex align-items-center justify-content-center position-relative flex-wrap */}
  <div class="card d-flex position-relative flex-column col-5">
    <div class="imgContainer">
      {/* <img src="https://images.pexels.com/photos/1456268/pexels-photo-1456268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
      <h4 className="mt-5">Commerciale - Apporteur d'affaires</h4>
    </div>
    <div class="content">
      <h2>Card One</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse eget velit tristique, sollicitudin leo viverra,
        suscipit neque. Aliquam ut facilisis urna, in pretium nibh.
        Morbi in leo in eros commodo volutpat ac sed dolor.
      </p>
    </div>
  </div>
  <div class="card d-flex position-relative flex-column col-5">
    <div class="imgContainer">
      <img src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    </div>
    <div class="content">
      <h2>Card Two</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse eget velit tristique, sollicitudin leo viverra,
        suscipit neque. Aliquam ut facilisis urna, in pretium nibh.
        Morbi in leo in eros commodo volutpat ac sed dolor.
      </p>
    </div>
  </div>
  <div class="card d-flex position-relative flex-column col-5">
    <div class="imgContainer">
      <img src="https://images.pexels.com/photos/847483/pexels-photo-847483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    </div>
    <div class="content">
      <h2>Card Three</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse eget velit tristique, sollicitudin leo viverra,
        suscipit neque. Aliquam ut facilisis urna, in pretium nibh.
        Morbi in leo in eros commodo volutpat ac sed dolor.
      </p>
    </div>
  </div>
  <div class="card d-flex position-relative flex-column col-5">
    <div class="imgContainer">
      <img src="https://images.pexels.com/photos/847483/pexels-photo-847483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    </div>
    <div class="content">
      <h2>Card Three</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse eget velit tristique, sollicitudin leo viverra,
        suscipit neque. Aliquam ut facilisis urna, in pretium nibh.
        Morbi in leo in eros commodo volutpat ac sed dolor.
      </p>
    </div>
  </div>
</div>
</div>



/////////////// 
/////////////// 
/////////////// 
///////////////  ARTICLES SERV COMMERCIAL
<div className="mt-5 articlesStrategieCommerciale ">
              <article className=" col-6 zoomCards ">
                <h3>Commerciale - Apporteur d'affaires</h3>
                <ul>
                  <p>
                    Vente en direct par téléphone d'un service ou d'un produit
                  </p>
                  <p>Développement de nouvelles affaires</p>
                  <p>
                    Qualification de leads générés par les campagnes sur les
                    réseaux sociaux
                  </p>
                  <p>Création de base de données pour tout type de clients</p>
                </ul>
              </article>

              <article className="col-6 zoomCards">
                <h3>Conseil & Suivi Clients</h3>
                <ul class="list-group">
                  <li class="list-group-item bg-transparent">
                    Accompagnement sur l'exploitation et l'optimisation d'un CRM
                  </li>
                  <li class="list-group-item bg-transparent">
                    Réalisation de rapports pour les KPIs (Key Performance
                    Indicators)
                  </li>
                  <li class="list-group-item bg-transparent">
                    Amélioration des processus internes
                  </li>
                  <li class="list-group-item bg-transparent">
                    Analyse des ventes
                  </li>
                </ul>
              </article>

              {/*            <article className="col-6 zoomCards">
              <h3>Définition de la stratégie commerciale à adopter</h3>
              <ul>
                <p>
                  Accompagnement sur la mise en place d’un CRM : amélioration de
                  l’interface avec création de listes, création de template,
                  création de comptes et contacts, création et suivi des devis,
                  accompagnement des équipes à l’utilisation de l’outil
                </p>
                <p>
                  Création d’un emailing, d’un pitch de présentation commercial
                </p>
              </ul>
            </article> */}

              <article className="col-6 zoomCards">
                <h3>Administration des ventes - France & Monde</h3>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item bg-transparent">
                    Suivi administratif
                  </li>
                  <li li class="list-group-item bg-transparent">
                    Traitement de la commande de A à Z
                  </li>
                  <li li class="list-group-item bg-transparent">
                    Suivi logistique
                  </li>
                  <li li class="list-group-item bg-transparent">
                    Créances clients :
                  </li>
                  <li li class="list-group-item bg-transparent">
                    Suivi des commerciaux
                  </li>
                  <li li class="list-group-item bg-transparent">
                    Gestion des stock
                  </li>
                </ul>
              </article>

              <article className="col-6 zoomCards">
                <h3>Prospection Commerciale</h3>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item bg-transparent">Sourcing</li>
                  <li class="list-group-item bg-transparent">
                    Création de contacts qualifiés
                  </li>
                  <li class="list-group-item bg-transparent">
                    Démarchage téléphonique
                  </li>
                  <li class="list-group-item bg-transparent">
                    Prise de rendez-vous qualifié
                  </li>
                  <li class="list-group-item bg-transparent">
                    Réalisation de devis
                  </li>
                  <li class="list-group-item bg-transparent">Closing</li>
                </ul>
              </article>
            </div>