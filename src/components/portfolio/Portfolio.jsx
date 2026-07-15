import React, { useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/naturopathie.webp";
import IMG2 from "../../assets/onepiece.webp";
import IMG3 from "../../assets/sonder.webp";
import IMG4 from "../../assets/guessnbRs.webp";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <PortfolioItem
          src={IMG1}
          title="Site de naturopathie"
          subtitle="HTML/CSS"
          srcGithub="https://github.com/Julienxbrb/Naturopathy"
          srcLiveDemo="https://litanagc.netlify.app"
        />
        <PortfolioItem
          src={IMG2}
          title="One Piece fandom"
          subtitle="HTML/CSS, JavaScript et PHP"
          srcGithub="https://github.com/Julienxbrb/OnePiece-Fandom"
          srcLiveDemo="https://onepiece.julien-bourbao.com"
        />
        <PortfolioItem
          src={IMG3}
          title="Réplique de Sonder"
          subtitle="HTML/CSS, JavaScript"
          srcGithub="https://github.com/Julienxbrb/Sonder-Replication"
          srcLiveDemo="https://sonder-replication.netlify.app"
        />
        <PortfolioItem
          src={IMG4}
          title="Guess my numbers"
          subtitle="HTML/CSS, JavaScript"
          srcGithub="https://github.com/Julienxbrb/guessmynumbers"
          srcLiveDemo="https://guessmynumbers-brb.netlify.app"
        />
      </div>
    </section>
  );
};

function PortfolioItem(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img onClick={toggleModal} src={props.src} alt="" />
        </div>
        <div className="portfolio__title">
          <h3>{props.title}</h3>
          <small>{props.subtitle}</small>
        </div>

        <div className="portfolio__item-cta">
          <a href={props.srcGithub} className="btn" target="_blank">
            Github
          </a>
          <a
            href={props.srcLiveDemo}
            className="btn btn-primary"
            target="_blank"
          >
            Live Démo
          </a>
        </div>
      </article>

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}>
            <img src={props.src} alt="" />
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
