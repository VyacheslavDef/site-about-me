import React from "react";
import "./main_style.css";

const Main = () => {
  return (
    <div className="main_wrapper container">
      <div className="main_about_wrapper">
        <h1 className="main_title_name mb-16">Vyacheslav Chetvertakov</h1>
        <svg className="position_svg_line mr-16" width="60" height="10">
          <path stroke="black" strokeWidth="5" d="M 0 0, L 60 0" />
        </svg>
        <h2 className="main_second_name d_ib mb-16">FrontEnd Devloper</h2>
        <p className="mb-16">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus odio aut eos deleniti.
        </p>
      </div>
      <div className="main_photo"></div>
    </div>
  );
};

export default Main;