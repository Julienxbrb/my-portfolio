import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Dev Skills</h5>
      <h2>Stacks techniques</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end</h3>
          <div className="experience__content">
            <StacksCards stack="HTML" XPstack="Expérimenté" />
            <StacksCards stack="CSS" XPstack="Expérimenté" />
            <StacksCards stack="JavaScript" XPstack="En cours" />
            <StacksCards stack="React JS" XPstack="En cours" />
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
          <h3>Back-end</h3>
          <div className="experience__content">
            <StacksCards stack="Node JS" XPstack="En cours" />
            <StacksCards stack="PHP" XPstack="Débutant" />
            <StacksCards stack="MySQL" XPstack="Débutant" />
          </div>
        </div>
      </div>
    </section>
  );
};

function StacksCards(props) {
  return (
    <article className="experience__details">
      <BsPatchCheckFill className="experience__details-icon" />
      <div>
        <h4>{props.stack}</h4>
        <small className="text-light">{props.XPstack}</small>
      </div>
    </article>
  );
}

export default Experience;
