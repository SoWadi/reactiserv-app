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
