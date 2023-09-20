import React from "react";
import VMC from "./inc/Vmc";

function Aboutus() {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row"> 
            <div className="col-md-4 my-auto">
              <h4>About ut</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">Home / About ut</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-c-light border-bottom">
        <div className="container">
            <h5 className="main-heading">Our company</h5>
            <div className="underline"></div>
            <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, dapibus parturient imperdiet metus risus facilisis egestas maecenas,
            </p>
        </div>
      </section>

            {/* Our Vision, mission and value*/}
            <VMC />


    </div>
  );
}

export default Aboutus;
