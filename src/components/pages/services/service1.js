import React from "react";
import VMC from "../inc/Vmc";

function service1() {
  return (
    <div>
      <section className="py-4 mb-5 bg-success">
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

      <section className="section mt-5">
        <div className="container d-flex flex-column">
          <h5 className="main-heading">Accompagnement sur la stratégie commerciale</h5>
          <div className="underline"></div>
          <div className="w-75">
{/*             <img className="w-25 float-end mx-5" src={photoLinda}></img> */}
            <p>
                Définition de la stratégie commerciale à adopter
                </p>

                <p>
                Accompagnement sur la mise en place d’un CRM : amélioration de l’interface avec création de listes, création de template, création de comptes et contacts, création et suivi des devis, accompagnement des équipes à l’utilisation de l’outil
            </p>
            <p>
                Création d’un emailing, d’un pitch de présentation commercial
            </p>
          </div>
        </div>
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