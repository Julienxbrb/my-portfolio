import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";
import { useRef, useState } from "react";

const WEB3FORMS_ACCESS_KEY = "d2af5d2f-0859-4ac4-a438-91f259e56679";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(form.current);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
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
          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Envoi en cours..." : "Envoyer"}
          </button>

          {status === "success" && (
            <p className="form-feedback form-feedback--success">
              Message envoyé, merci ! Je te répondrai rapidement.
            </p>
          )}
          {status === "error" && (
            <p className="form-feedback form-feedback--error">
              Une erreur est survenue, réessaie dans un instant.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
