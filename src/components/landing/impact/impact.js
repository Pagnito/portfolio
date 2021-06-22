import React, { useEffect } from "react";
import "./impact.scss";

const Solutions = ({ reference }) => {
  return (
    <section ref={reference} id="impact-section">
      <section className="impact-swing-door-container">
        <div className="impact-swing-door-left impact-door-one"></div>
        <div className="impact-swing-door-right impact-door-one"></div>
      </section>
    </section>
  );
};
export default Solutions;
