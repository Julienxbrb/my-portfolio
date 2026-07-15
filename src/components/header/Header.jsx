import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me1.jpg";
import HeaderSocials from "./HeaderSocials";
import { RxDoubleArrowDown } from "react-icons/rx";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour,</h5>
        <h1>Julien Bourbao</h1>
        <h5 className="text-light">Développeur Full-Stack</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#portfolio" className="scroll__down">
          Portfolio
          <RxDoubleArrowDown className="arrowDown" />
        </a>
      </div>
    </header>
  );
};

export default Header;
