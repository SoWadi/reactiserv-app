import React from "react";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import VMC from "./inc/Vmc";
import Service1 from "../images/Slider2.jpg";

function Home() {
  return (
    <div>
      <Slider />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our company</h3>
              <div className="underline mx-auto"></div>
              <p>
                How to Use Lorem Ipsum. For plaintext Lorem Ipsum, type lorem
                then press the Ctrl-Shift-L keyboard shortcut. The default
                keyboard shortcut is the same for all supported platforms. You
                can also add options to the lorem command with an underscore
                character followed by the option name.
              </p>
              <Link to="/about" className="btn btn-warning shadow">
                {" "}
                Read more
              </Link>{" "}
            </div>
          </div>
        </div>
      </section>
      {/* Our Vision, mission and value*/}
      <VMC />

      {/* Our services */}
      <section className="section border-top-c">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Our services</h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service1}
                  className="w-100 border-bottom-c"
                  alt="Services"
                />
                <div className="card-body">
                  <div className="card-body">
                    <h6>Service1</h6>
                    <div className="underline"></div>
                    <p>
                      Use Lorem Ipsum. For plaintext Lorem Ipsum, type lorem
                      then press the Ctrl-Shift-L keyboard
                    </p>
                  </div>
                  <Link to="/services" className="btn btn-link">
                    read more{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service1}
                  className="w-100 border-bottom-c"
                  alt="Services"
                />
                <div className="card-body">
                  <div className="card-body">
                    <h6>Service1</h6>
                    <div className="underline"></div>
                    <p>
                      Use Lorem Ipsum. For plaintext Lorem Ipsum, type lorem
                      then press the Ctrl-Shift-L keyboard
                    </p>
                  </div>
                  <Link to="/services" className="btn btn-link">
                    read more{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service1}
                  className="w-100 border-bottom-c"
                  alt="Services"
                />
                <div className="card-body">
                  <div className="card-body">
                    <h6>Service1</h6>
                    <div className="underline"></div>
                    <p>
                      Use Lorem Ipsum. For plaintext Lorem Ipsum, type lorem
                      then press the Ctrl-Shift-L keyboard
                    </p>
                  </div>
                  <Link to="/services" className="btn btn-link">
                    read more{" "}
                  </Link>
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
