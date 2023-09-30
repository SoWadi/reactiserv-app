import React from "react";
import './Contact.css';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";


import * as yup from "yup";
import emailjs from "@emailjs/browser";

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
              </Link>{" "}Contact</h6>
            </div>
          </div>
        </div>
      </section>

      <div className="container"></div>
      <div className="card shadow  w-50 mx-auto my-3">
        <div className="card-body">
          <div className="row">

          <h1 className="h1-contact">Formulaire de Contact</h1>

          <form className="contact-form " onSubmit={handleSubmit(onSubmit)}>
            <div className="form-content d-flex flex-column">
              <label htmlfor="name" className="label-contact">
                Nom et Prenom :
              </label>
              <input
                className="input-contact"
                type="text"
                id="name"
                nanme="name"
                placeholder="Nom et Prenom"
                {...register("name")}
              />
              {errors.name && <p id="c-yup">{errors.name.message}</p>}
              <label htmlfor="email" className="label-contact">
                Adresse mail :
              </label>
              <input
                className="input-contact"
                type="email"
                id="email"
                nanme="email"
                placeholder="exemple@gmail.com"
                {...register("email")}
              />
              {errors.email && <p id="c-yup">{errors.email.message}</p>}
              <label htmlfor="phone" className="label-contact">
                N° Téléphone :
              </label>
              <input
                className="input-contact"
                type="text"
                id="phone"
                nanme="phone"
                placeholder="+12345678"
                {...register("phone")}
              />
              {errors.phone && <p id="c-yup">{errors.phone.message}</p>}
              <label for="Sujet" className="label-contact">
                Sujet:
              </label>
              {/* <select
                className="select-contact"
                name="Subject"
                {...register("subject")}
              >
                <option selected>Selectionner l'objet de la demande</option>
                <option value="devis">Devis</option>
                <option value="questions">Questions</option>
                <option value="Autre">Autre</option>
              </select>
 */}
              <label htmlfor="message" className="label-contact">
                {" "}
                Message :
              </label>
              <textarea
                className="message-contact"
                placeholder="Merci de renseigner vos questions ou commentaires"
                id="message"
                cols="20"
                rows="10"
                name="message"
                {...register("message")}
              ></textarea>
              {errors.message && <p id="c-yup">{errors.message.message}</p>}
{/*               <label htmlFor="checkbox" className="label-contact">
                <input type="checkbox" /> En cochant cette case, j'accepte de
                recevoir des informations sur les différentes offres
                disponibles.
              </label> */}

              <button className="button-contact" type="Submit" value="Envoyer">
                Envoyer
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
