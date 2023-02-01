import React from "react";
import "./skills_style.css";

const Skills = () => {
  return (
    <div className="skills_wrapper container">
      <h2 className="title_text">Skills</h2>
      <div className="skills_items_wrapper">
        <div className="skills_item_wrapper">
          <h3 className="text_center">FRONTEND</h3>
          <div className="stroks_items grid">
            <div className="stroke_item">
              <i className="bx bxl-html5 icons"></i>
              <p className="stroke_text">HTML</p>
              <div className="div_skill_stars">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star-half"></i>
              </div>
            </div>
            <div className="stroke_item">
              <i className="bx bxl-css3 icons"></i>
              <p className="stroke_text">CSS</p>
              <div className="div_skill_stars">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bx-star"></i>
              </div>
            </div>
            <div className="stroke_item">
              <i className="bx bxl-javascript icons"></i>
              <p className="stroke_text">JavaScript</p>
              <div className="div_skill_stars">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star-half"></i>
                <i className="bx bx-star"></i>
              </div>
            </div>
            <div className="stroke_item">
              <i className="bx bxl-react icons"></i>
              <p className="stroke_text">React</p>
              <div className="div_skill_stars">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star-half"></i>
                <i className="bx bx-star"></i>
              </div>
            </div>
            <div className="stroke_item">
              <i className="bx bxl-sass icons"></i>
              <p className="stroke_text">SCSS</p>
              <div className="div_skill_stars">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bx-star"></i>
              </div>
            </div>
            <div className="stroke_item">
              <i className="bx bxl-git icons"></i>
              <p className="stroke_text">Git</p>
              <div className="div_skill_stars">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bx-star"></i>
                <i className="bx bx-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
