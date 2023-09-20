import React from "react";
import { Link } from "react-router-dom";

function Contactus() {
  return (
    <div>
      <section className="py-4 mb-5 bg-success">
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
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 border-right">
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
                </div>
                <div className="col-md-6 border-start">
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
