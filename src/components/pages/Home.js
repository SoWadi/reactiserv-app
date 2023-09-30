import React from "react";
import './animatedSquare.css';
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import VMC from "./inc/Vmc";
import Service1 from "../images/Slider2.jpg";
import PhotoHome from "../images/AboutFoto2.png";

function Home() {
  return (
    <div>
      {/*  <Slider /> */}

      {/*      <div className="divAnimation"></div> */}

      <div class="area" >
            <ul class="circles">
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

      <section className="section my-5 divAnimation">
        <div className="container">
          <div className="row">
            <div className="col-md-12 pb-5 my-auto  text-center">
              <h2 className="main-heading">
                {" "}
                Linda Tadjer
                <hr className="w-25 mx-auto" />
              </h2>
              <h1>
                Office manager & Commerciale indépendante
                {/* Simplifier vos opérations commerciales. */}
              </h1>
              <div className="underline mx-auto"></div>
              <p>Seul on va plus vite, ensemble on va plus loin.</p>
              {/*            <Link to="/about" className="btn btn-success w-25 shadow my-5">
                {" "}
                Read more
              </Link>{" "} */}
              <a
                className="my-auto py-2 px-4 my-5 enSavoirPlusBtn"
                href="#more-services"
              >
                {" "}
                En savoir plus
              </a>{" "}
            </div>
            {/* FOTO ABOUT/HOME */}
            {/*           <div className="col-md-6 my-5">
            <img className="w-100" src={PhotoHome} />
          </div> */}
          </div>
        </div>
      </section>
      </div>
      {/* Our Vision, mission and value*/}
      {/* <VMC /> */}

      {/* Our services */}
      <section className="section border-top-c mb-5">
        <h4 id="more-services"></h4>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center mt-5">
              <h3 className="main-heading">Services</h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="Cards">
              <div className="col-md-4 p-3 cardCustom align-self-start zoomCards">
                <div className="card shadow">
                  <img
                    src={Service1}
                    className="w-100 border-bottom-c"
                    alt="Services"
                  />
                  <div className="card-body">
                    <div className="card-body">
                      <h6>Accompagnement sur la stratégie commerciale</h6>
                      <div className="underline"></div>
                      <p>
                        Use Lorem Ipsum. For plaintext Lorem Ipsum, type lorem
                        then press the Ctrl-Shift-L keyboard
                      </p>
                    </div>
                    <Link to="/strategie-commerciale" className="btn btn-link">
                      read more{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 cardCustom align-self-center zoomCards">
                <div className="card shadow">
                  <img
                    src={Service1}
                    className="w-100 border-bottom-c"
                    alt="Services"
                  />
                  <div className="card-body">
                    <div className="card-body">
                      <h6>Gestion administrative</h6>
                      <div className="underline"></div>
                      <p>
                        Use Lorem Ipsum. For plaintext Lorem Ipsum, type lorem
                        then press the Ctrl-Shift-L keyboard
                      </p>
                    </div>
                    <Link to="/serviceAdm" className="btn btn-link">
                      read more{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 cardCustom align-self-end zoomCards">
                <div className="card shadow">
                  <img
                    src={Service1}
                    className="w-100 border-bottom-c"
                    alt="Services"
                  />
                  <div className="card-body">
                    <div className="card-body">
                      <h6>Atelier prospection commerciale</h6>
                      <div className="underline"></div>
                      <p>
                        Use Lorem Ipsum. For plaintext Lorem Ipsum, type lorem
                        then press the Ctrl-Shift-L keyboard
                      </p>
                    </div>
                    <Link to="/atelierProsp" className="btn btn-link">
                      read more{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
}

export default Home;

{
  /*       <section className="section bg-c-light border-top-c">
<div className="container">
<div className="row">
<div className="col-md-12 mb-4 text-center">
<h3 className="main-heading">Vision, mission, value</h3>
<div className="underline mx-auto"></div>
</div>
<div className="col-md-4 text-center">
<h6>Our vision</h6>
<p>
Use Lorem Ipsum. For plaintext Lorem Ipsum, type lorem then
press the Ctrl-Shift-L keyboard
</p>
</div>
<div className="col-md-4 text-center">
<h6>Our mission</h6>
<p>
Use Lorem Ipsum. For plaintext Lorem Ipsum, type lorem then
press the Ctrl-Shift-L keyboard
</p>
</div>
<div className="col-md-4 text-center">
<h6>Our core values</h6>
<p>
Use Lorem Ipsum. For plaintext Lorem Ipsum, type lorem then
press the Ctrl-Shift-L keyboard
</p>
</div>
</div>
</div>
</section> */
}

{
  /* <h6>Our vision</h6>
<p>
  Use Lorem Ipsum. For plaintext Lorem Ipsum, type lorem then
  press the Ctrl-Shift-L keyboard
</p>
</div>
<div className="col-md-4">
<h6>Our mission</h6>
<p>
  Use Lorem Ipsum. For plaintext Lorem Ipsum, type lorem then
  press the Ctrl-Shift-L keyboard
</p>
</div>
<div className="col-md-4">
<h6>Our core values</h6>
<p>
  Use Lorem Ipsum. For plaintext Lorem Ipsum, type lorem then
  press the Ctrl-Shift-L keyboard
</p>*/
}
