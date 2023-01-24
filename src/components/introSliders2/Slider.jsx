import React from "react";
import "./styles.css";

function Slider({ imgLink, paragraph1, paragraph2 }) {
  return (
    <section className="slide">
      <div className="container">
        <div className="emoji">
          <img src={imgLink} />
        </div>
        <div className="container">
          <h4 className="title">
            {paragraph1}
            <br />
            {paragraph2}
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Slider;
