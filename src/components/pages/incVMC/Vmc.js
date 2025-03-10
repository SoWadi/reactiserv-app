import React from "react";
import "../incVMC/styleVMC.css"


function VMC(){
    return (
        <section className="vmcBody section border-top-c my-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading text-white">NOS VALEURS</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-3 text-center">
              <h6 className=" text-white">LA CONFIANCE</h6>
              <p className=" text-white">
              Est la base de toute relation professionnelle, la confiance est gage de sérénité au sein de la collaboration. 
              </p>
            </div>
            <div className="col-md-3 text-center">
              <h6 className=" text-white"º>COLLABORATION</h6>
              <p className=" text-white">
              Ensemble, nous analysons votre stratégie d’entreprise, et mettons en place les actions correctives. 
              </p>
            </div>
            <div className="col-md-3 text-center">
              <h6 className=" text-white">L’ECOUTE ACTIVE</h6>
              <p className=" text-white">
              C’est comprendre vos enjeux et ceux de vos clients.
              Cela permet d’améliorer les relations. 
              </p>
            </div>
            <div className="col-md-3 text-center">
              <h6 className=" text-white">COMMUNICATION</h6>
              <p className=" text-white">
              La clé de la réussite, communiquer avec vos clients, vos prospects grâce au marketing digital. 
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}
export default VMC