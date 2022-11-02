import "./FooterStyles.css";

import React from "react";

import { FaFacebook, FaGithub, FaHouseUser, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return <div className="footer">
    <div className="footer-container">
      <div className="left">
        <div className="location">
          <FaHouseUser size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          <div>
            <p>10 Rue Jesse Owens.</p>
            <p>93200 Saint-Denis.</p>
          </div>
        </div>
        <div className="phone">
          <h4>
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            +33 6 35 24 61 38
          </h4>
        </div>
        <div className="email">
          <h4>
            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            t.scandolera@gmail.com
          </h4>
        </div>
      </div>

      <div className="right">
        <h4>About the company</h4>
        <p>This is me Thibault Scandolera. CEO &
          founder of SuperEvilMegaCorp. I enjoy discussing
          new projects and design challenges. I'm currently finishing 42 School Common Core's last project</p>
        <div className="social">
          <FaFacebook size={30} style={{ color: "fff", marginRight: "1rem" }} />
          <a href="https://github.com/Tscandol"><FaGithub size={30} style={{ color: "fff", marginRight: "1rem" }} /></a>
          <a href="https://fr.linkedin.com/in/thibaultscandolera-internationalpurchasing"><FaLinkedin size={30} style={{ color: "fff", marginRight: "1rem" }} /></a>
        </div>
      </div>
    </div>
  </div >;
};

export default Footer;
