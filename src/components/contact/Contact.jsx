import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_tfpggpb",
      "template_pg4twk7",
      form.current,
      "Iru511qTV-Idbiggw",
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Me contacter</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>julien.bourbao@aol.fr</h5>
            <a href="mailto:julien.bourbao@aol.fr" target="_blank">
              Envoyer un mail
            </a>
          </article>

          <article className="contact__option">
            <FiSmartphone className="contact__option-icon" />
            <h4>Téléphone</h4>
            <h5>07 87 32 12 20</h5>
            <p>Appelez moi</p>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nom / Prénom" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Votre Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
