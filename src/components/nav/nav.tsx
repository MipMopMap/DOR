import React, { FC } from "react";
import "./nav.css";
import CV from "../../assets/Dor_Tagger_CV.pdf";

interface NavInt {}

const Nav: FC<NavInt> = () => {
  const logo = "<D/>";
  return (
    <div className="nav-wrapper container" id="LI-1">
      <div>
        <a href="/" className="logo-wrapper">
          <p className="logo">{logo}</p>
          <p className="nav-text logo-text">Dor Tagger</p>
        </a>
      </div>
      <div className="menu-short">
        <a href="#LI-2" className="nav-text link">
          Projects
        </a>
        <a href="#LI-6" className="nav-text link">
          About/Contact
        </a>
        <a href={CV} download className="nav-text link">
          CV
        </a>
      </div>

      <div className="phone-links">
        <a href="#LI-6" className="nav-text link">
          About/Contact
        </a>
        <a href={CV} download className="nav-text link">
          CV
        </a>
      </div>
    </div>
  );
};

export default Nav;
