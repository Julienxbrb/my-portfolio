import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";
import { useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const WEB3FORMS_ACCESS_KEY = "COLLE_TA_CLE_ICI"; // remplace par la clé reçue par email depuis web3forms.com

// Sitekey de test partagée par Web3Forms (fonctionne sans compte hCaptcha séparé).
// Si tu veux un jour ton propre compte hCaptcha, remplace-la par ta sitekey perso.
const HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

const Contact = () => {
  const form = useRef();
  const captchaRef = useRef();
  const [captchaToken, setCaptchaToken] = useState(null);
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error" | "captcha-required"

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setStatus("captcha-required");
      return;
    }

    setStatus("sending");

    const formData = new FormData(form.current);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("h-captcha-response", captchaToken);

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
    } finally {
      // Un token hCaptcha est à usage unique : on réinitialise le widget
      // pour que l'utilisateur (ou toi, en cas de nouveau test) puisse renvoyer un message.
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
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
          <input type="text" name="subject" placeholder="Sujet" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Votre Message"
            required
          ></textarea>

          <HCaptcha
            ref={captchaRef}
            sitekey={HCAPTCHA_SITEKEY}
            reCaptchaCompat={false}
            onVerify={(token) => {
              setCaptchaToken(token);
              setStatus(null);
            }}
            onExpire={() => setCaptchaToken(null)}
          />

          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Envoi en cours..." : "Envoyer"}
          </button>

          {status === "captcha-required" && (
            <p className="form-feedback form-feedback--error">
              Merci de valider le captcha avant d'envoyer.
            </p>
          )}
          {status === "success" && (
            <p className="form-feedback form-feedback--success">
              Message envoyé, merci ! Je vous répondrai rapidement.
            </p>
          )}
          {status === "error" && (
            <p className="form-feedback form-feedback--error">
              Une erreur est survenue, réessayez dans un instant.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
