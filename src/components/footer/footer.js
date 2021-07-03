import React from "react";
import { useHistory } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  let history = useHistory();
  return (
    <section id="footer-section">
      <img src="/assets/eye-icon.svg" id="eye-icon" />
      <img onClick={()=>history.push('/')} src="/assets/eyeball-icon.svg" id="eyeball-icon" />
    </section>
  );
};
export default Footer;
