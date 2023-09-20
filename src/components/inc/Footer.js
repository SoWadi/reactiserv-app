import React from "react";
import { Link } from "react-router-dom";

function Footer () {
    return (
        <section className="section footer bg-dark text-white mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company information</h6>
                        <hr/>
                        <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, dapibus parturient imperdiet metus risus facilisis egestas maecenas, laoreet inceptos bibendum lobortis fames duis.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr/>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/">Contact</Link></div>
                        <div><Link to="/">Blog</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Informations</h6>
                        <hr/>
                        <div><p className="text-white mb-1">Lorem ipsum dolor sit amet</p></div>
                        <div><p className="text-white mb-1">Lorem ipsum dolor sit amet</p></div>
                        <div><p className="text-white mb-1">Lorem ipsum dolor sit amet</p></div>
                        <div><p className="text-white mb-1">Lorem ipsum dolor sit amet</p></div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Footer;