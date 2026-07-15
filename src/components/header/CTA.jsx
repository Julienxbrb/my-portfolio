import React from "react";
import CV from "../../assets/CV_JulienBourbao1_.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} target="_blank" className="btn">
        Voir mon CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contactez-moi !
      </a>
    </div>
  );
};

export default CTA;
