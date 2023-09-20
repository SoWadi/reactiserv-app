import React from "react";
import imgAtelier from "../../images/imgAtelier.png";

function Atelier() {
  return (
    <div>
      <section className="py-4 mb-5 bg-success">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 my-auto">
              <h4>Atelier sur la prospection commerciale :</h4>
            </div>
            <div className="col-lg-6 my-auto">
              <h6 className="float-end">
                Home / Atelier sur la prospection commerciale :
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section mt-5">
        <div className="container d-flex flex-column">
          <h5 className="main-heading">
            Atelier sur la prospection commerciale
          </h5>
          <div className="underline"></div>
          <div>
            <div>
              <img className="w-25 float-end mx-5" src={imgAtelier} />
            </div>
            <div>
              <p>
                Accompagnement d’un groupe à la prospection commerciale :
                réalisation du pitch commercial, prise de rendez- vous
                téléphonique.
              </p>

              <p>
                Je peux vous proposer un lieu ou intervenir sur site
                directement.
              </p>
            </div>
          </div>
        </div>
        <div className=""></div>
      </section>
    </div>
  );
}

export default Atelier;
