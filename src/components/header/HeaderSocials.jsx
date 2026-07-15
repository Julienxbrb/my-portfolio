import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/julien-bourbao/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Julienxbrb" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/bourba_" target="_blank">
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
