import React from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

import * as yup from "yup";
import emailjs from "@emailjs/browser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const schema = yup
    .object({
      name: yup
        .string()
        .max(50)
        .required("Merci de rentrer votre nom et prénom"),
      email: yup
        .string()
        .email("Merci de renter une adresse mail valide")
        .max(255)
        .required("Merci de rentrer une adresse mail"),
      phone: yup
        .number()
        .typeError("Merci de rentrer une numero de téléphone valide")
        .required("Merci de rentrer un numero de téléphone"),
      message: yup.string().required("Merci de rentrer un message"),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, r) => {
    alert("😀 Merci pour votre message, il sera traité au plus vite 😀");
    const templateId = "template_uq32uea";
    const serviceId = "service_8q190d7";
    sendFeedback(serviceId, templateId, {
      name: data.name,
      phone: data.phone,
      email: data.email,
      subject: data.subject,
      message: data.message,
      reply_to: r.target.reset(),
    });
  };

  const sendFeedback = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables, "0psyiyT4eNEeg8gfv")
      .then((res) => {
        console.log("succes");
      })
      .catch((err) => console.error("Il y a une erreur"));
  };

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
                </Link>{" "}
                Contact
              </h6>
            </div>
          </div>
        </div>
      </section>

      <h1 className="h1-contact">Formulaire de Contact</h1>
      <div className="card shadow w-75 mx-auto my-3 border">
        <div className="card-body p-2">
          <div className="row">
            <div className="col-md-8 d-flex border-end flex-column mt-5">
              <form className="contact-form " onSubmit={handleSubmit(onSubmit)}>
                <div className="form-content d-flex flex-column">
                  {/* <label htmlfor="name" className="label-contact">
                    Nom et Prenom :
                  </label> */}
                  <input
                    className="input-contact"
                    type="text"
                    id="name"
                    nanme="name"
                    placeholder="Nom et Prenom"
                    {...register("name")}
                  />
                  {errors.name && <p id="c-yup">{errors.name.message}</p>}
                  {/* <label htmlfor="email" className="label-contact">
                    Adresse mail :
                  </label> */}
                  <input
                    className="input-contact"
                    type="email"
                    id="email"
                    nanme="email"
                    placeholder="Email"
                    {...register("email")}
                  />
                  {errors.email && <p id="c-yup">{errors.email.message}</p>}
                  {/*                   <label htmlfor="phone" className="label-contact">
                    N° Téléphone :
                  </label> */}
                  <input
                    className="input-contact"
                    type="text"
                    id="phone"
                    nanme="phone"
                    placeholder="Téléphone"
                    {...register("phone")}
                  />
                  {errors.phone && <p id="c-yup">{errors.phone.message}</p>}
                  {/*                   <label for="Sujet" className="label-contact">
                    Sujet:
                  </label>
                  <select
                className="select-contact"
                name="Subject"
                {...register("subject")}
              >
                <option selected>Selectionner l'objet de la demande</option>
                <option value="devis">Devis</option>
                <option value="questions">Questions</option>
                <option value="Autre">Autre</option>
              </select> */}

                  <label htmlfor="message" className="label-contact text-start mt-5">
                    {" "}
                    Message :
                  </label>
                  <textarea
                    className="message-contact w-100 mx-auto"
                    placeholder="Merci de renseigner vos questions ou commentaires"
                    id="message"
                    /* cols="10" */
                    rows="3"
                    name="message"
                    {...register("message")}
                  ></textarea>
                  {errors.message && <p id="c-yup">{errors.message.message}</p>}

                  <button
                    className="button-contact w-50 mx-auto"
                    type="Submit"
                    value="Envoyer"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-4 my-auto">
              <div className="my-auto contactInfos">
                <h5 className="mb-4">Linda Tadjer</h5>
                <p className="mr-3 mx-3"> 📞 07 88 13 33 03</p>
                <p className="mr-3 mx-3">✉️ l.avlessi@reacti-serv.com</p>

                <div className="social-icons">
                <a href="https://www.linkedin.com/company/reactiserv/">
                  <FontAwesomeIcon icon={faLinkedinIn} className="mr-3 mx-3 text-success" />
                </a>
              </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
