import React from "react";
import Info from "./Info";
import img from "../../img/pidjak.png";
import "./about_style.css";

const About = () => {
  return (
    <div className="about container">
      <h2 className="title_text">Немного обо мне</h2>
      <div className="about_wrapper grid">
        <img className="about_img" src={img} alt="" />
        <div className="about_data">
          <Info />
          <p>
            В сентябре 2021 года начал активное обучение в IT сфере, через пол
            года начал заниматься своими проетакми и брал несколько работ на
            фрилансе. Работал в команде с бекендом над совместным проектом.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
