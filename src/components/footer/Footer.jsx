import React from "react";
import "./footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        JB
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#about">À propos</a>
        </li>
        <li>
          <a href="#experience">Expériences</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/julien-bourbao/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Julienxbrb">
          <FaGithub />
        </a>
        <a href="https://twitter.com/bourba_">
          <FaTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Julien Bourbao. Tous droits réservés</small>
      </div>
    </footer>
  );
};

export default Footer;
