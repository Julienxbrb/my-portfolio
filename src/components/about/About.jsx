import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>About me</h5>
      <h2>À propos</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <AboutCard
              year={"2019 - 2021"}
              cardTitle={"Université UFR SLHS"}
              cardDesc={"Langues étrangères appliquées"}
              options={"Russe/Anglais"}
            />
            <AboutCard
              year={"2021 - 2022"}
              cardTitle={"CNED | BTS SIO"}
              cardDesc={"Services Informatiques aux Organisations"}
              options={"Solutions logicielles, Applications d'entreprise"}
            />
            <AboutCard
              year="2022 - 2023"
              cardTitle={"FORMATIONS"}
              cardDesc={"Développement web"}
              options={"HTML/CSS, JavaScript, React JS"}
            />
          </div>

          <p>
            Julien Bourbao, 25 ans. Actuellement en autodidacte je cherche
            constamment à élargir mes compétences et à les appronfondir. Mon
            attrait pour le développement est apparue en 2021. J'ai alors décidé
            de me consacrer à ce domaine en développant différents projets. Mon
            objectif est d'acquérir les compétences/expériences nécessaires afin
            de pouvoir proposer mes services en tant que professionnel.
          </p>

          <a href="#contact" className="btn btn-primary">
            Me joindre
          </a>
        </div>
      </div>
    </section>
  );
};

function AboutCard(props) {
  return (
    <article className="about__card">
      <FaAward className="about__icon" />
      <p>{props.year}</p>
      <h5>{props.cardTitle}</h5>
      <p>{props.cardDesc}</p>
      <small>{props.options}</small>
    </article>
  );
}

export default About;
