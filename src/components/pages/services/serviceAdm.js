import React from "react";

function ServiceAdm() {
  return (
    <div className="row my-auto">
      <section className="py-4 bg-success">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-4 my-auto">
              <h4>Assistanat administratif</h4>
            </div>
            <div className="col-lg-6 col-md-8 my-auto">
              <h6 className="float-end">Home / Assistanat administratif</h6>
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
              Votre Partenaire en Administration des Ventes France & Export
            </h1>
            <div className="underline"></div>
            {/*  <div className="row"> */}
            {/*             <img className="w-25 float-end mx-5" src={photoLinda}></img> */}
          </div>
          {/*  </div> */}
        </section>
     {/*  <section className="section mt-5">
        <div className="container d-flex flex-column">

          <div className="w-75">
            <p>
              En tant que professionnel de l'administration des ventes, je suis
              dédié à simplifier vos processus commerciaux. Mon expertise couvre
              trois domaines clés :
            </p>
            <p>
              Confiez-moi votre administration des ventes en France & Export et
              libérez-vous de la complexité. Contactez-moi aujourd'hui pour
              discuter de la façon dont je peux améliorer vos opérations
              commerciales.
            </p>

            <p>Votre réussite est ma priorité.</p>
          </div>
        </div>
      </section> */}

        <div class="container containerStrategieCommerciale px-auto">
          <div className="row ">
            <div class="card d-flex position-relative flex-column col-12 col-md-12 col-lg-5 mx-auto">
              <div class="titleContainer">
                {/* <img src="https://images.pexels.com/photos/1456268/pexels-photo-1456268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
                <h4 className="mt-5 p-2">Saisie de Commandes sur ERP</h4>
              </div>
              <div class="content">
                {/* <h2>Commerciale - Apporteur d'affaires</h2> */}
                <ul class="list-group list-group-flush">
                  {/*                <li class="list-group-item bg-transparent">
                  Je me charge de la saisie précise et rapide des commandes clients dans votre système ERP. Cette approche permet de maintenir un contrôle strict sur vos stocks tout en améliorant la satisfaction de vos clients.
                  </li> */}
                  <li class="list-group-item bg-transparent">
                    Saisie précise et rapide des commandes clients dans votre
                    système ERP.
                  </li>
                  <li class="list-group-item bg-transparent">
                    Contrôle strict sur vos stocks.
                  </li>
                  <li class="list-group-item bg-transparent">
                    Amélioration de la satisfaction client.
                  </li>
                </ul>
              </div>
            </div>
            <div class="card d-flex position-relative flex-column col-12 col-md-12 col-lg-5 mx-auto">
              <div class="titleContainer">
                {/* <img src="https://images.pexels.com/photos/1456268/pexels-photo-1456268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
                <h4 className="mt-5 p-2">Relances de Factures </h4>
              </div>
              <div class="content">
                {/* <h2>Commerciale - Apporteur d'affaires</h2> */}
                <ul class="list-group list-group-flush">
                  {/*                <li class="list-group-item bg-transparent">
                  Je me charge de la saisie précise et rapide des commandes clients dans votre système ERP. Cette approche permet de maintenir un contrôle strict sur vos stocks tout en améliorant la satisfaction de vos clients.
                  </li> */}
                  <li class="list-group-item bg-transparent">
                    Suivi diligent des factures en attente de paiement
                  </li>
                  <li class="list-group-item bg-transparent">
                    Grâce à mon expertise, vous maintiendrez une trésorerie
                    stable
                  </li>
                  <li class="list-group-item bg-transparent">
                    Renforcement la crédibilité de votre entreprise
                  </li>
                </ul>
              </div>
            </div>{" "}
            <div class="card d-flex position-relative flex-column col-12 col-md-12 col-lg-5 mx-auto">
              <div class="titleContainer">
                {/* <img src="https://images.pexels.com/photos/1456268/pexels-photo-1456268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
                <h4 className="mt-5 p-2">Rédaction de Courriers</h4>
              </div>
              <div class="content">
                {/* <h2>Commerciale - Apporteur d'affaires</h2> */}
                <ul class="list-group list-group-flush">
                  {/*                <li class="list-group-item bg-transparent">
                  Je me charge de la saisie précise et rapide des commandes clients dans votre système ERP. Cette approche permet de maintenir un contrôle strict sur vos stocks tout en améliorant la satisfaction de vos clients.
                  </li> */}
                  <li class="list-group-item bg-transparent">
                  Ma compétence en
              rédaction assure une communication impeccable avec vos clients.
              Des confirmations de commandes aux réponses aux demandes, chaque
              courrier est méticuleusement rédigé pour refléter votre
              professionnalisme.
                  </li>
                </ul>
              </div>
            </div>{" "}
            {/* d-flex align-items-center justify-content-center position-relative flex-wrap */}
          </div>
        </div>
      </div>

    </div>
  );
}

export default ServiceAdm;
