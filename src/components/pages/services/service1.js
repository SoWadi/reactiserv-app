import React from "react";
import VMC from "../inc/Vmc";
import "./service-commercial.css";

function service1() {
  return (
    <div className="row my-auto">
      <section className="py-4 mb bg-success">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-4 my-auto">
              <h4>Accompagnement sur la stratégie commerciale</h4>
            </div>
            <div className="col-lg-6 col-md-8 my-auto">
              <h6 className="float-end">Home / Stratégie commerciale</h6>
            </div>
          </div>
        </div>
      </section>

      <div class="area h-100">
        <ul class="circles h-100">
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

        <section className="section mt-5 h-100">
          <div className="container">
            <h1 className="main-heading">
              Accompagnement sur la stratégie commerciale
            </h1>
            <div className="underline"></div>
            {/*  <div className="row"> */}
            {/*             <img className="w-25 float-end mx-5" src={photoLinda}></img> */}
          </div>
          {/*  </div> */}
        </section>

        <div class="container containerStrategieCommerciale px-auto">
          <div className="row ">
            {" "}
            {/* d-flex align-items-center justify-content-center position-relative flex-wrap */}
            <div class="card d-flex position-relative flex-column col-12 col-md-12 col-lg-5 mx-auto">
              <div class="titleContainer">
                {/* <img src="https://images.pexels.com/photos/1456268/pexels-photo-1456268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
                <h4 className="mt-5 p-2">
                  Développement commercial, qualification leads, ...
                </h4>
              </div>
              <div class="content">
                {/* <h2>Commerciale - Apporteur d'affaires</h2> */}
                <ul class="list-group list-group-flush">
                  <li class="list-group-item bg-transparent">
                    Vente en direct par téléphone d'un service ou d'un produit
                  </li>
                  <li class="list-group-item bg-transparent">
                    Développement de nouvelles affaires
                  </li>
                  <li class="list-group-item bg-transparent">
                    Qualification de leads générés par les campagnes sur les
                    réseaux sociaux
                  </li>
                  <li class="list-group-item bg-transparent">
                    Création de base de données pour tout type de clients
                  </li>
                </ul>
              </div>
            </div>
            <div class="card d-flex position-relative flex-column col-12 col-md-12 col-lg-5 mx-auto">
              <div class="titleContainer">
                {/* <img src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
                <h4 className="mt-5 p-2">
                  Optimisation CRM, KPIs, analyse des
                  ventes, ...
                </h4>
              </div>
              <div class="content">
                {/*               <h3>Conseil & Suivi Clients</h3> */}

                <ul class="list-group list-group-flush">
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
              </div>
            </div>
            <div class="card d-flex position-relative flex-column col-12 col-md-12 col-lg-5 mx-auto">
              <div class="titleContainer">
                {/*                 <img src="https://images.pexels.com/photos/847483/pexels-photo-847483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
                <h4 className="mt-5 p-2">
                  Administration des ventes en France et à l'international...
                </h4>
              </div>
              <div class="content">
                <h3></h3>
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
              </div>
            </div>
            <div class="card d-flex position-relative flex-column col-12 col-md-12 col-lg-5 mx-auto">
              <div class="titleContainer">
                {/* <img src="https://images.pexels.com/photos/847483/pexels-photo-847483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
                <h4 className="mt-5 p-2">
                  Prospection Commerciale : Développer votre clientèle ...
                </h4>
              </div>
              <div class="content">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default service1;
