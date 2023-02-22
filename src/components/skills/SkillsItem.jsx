import React from "react";

const SkillsItem = ({array}) => {
  return (
    <div className="skills_item">
      <div className="skills_title">
        <h3 className="skills_name">{array.name}</h3>
        <i className={array.icons}></i>
        <span className="skills_number">
          {array.percent}
          <span>%</span>
        </span>
      </div>
      <p className="slills_disc">{array.description}</p>
      <div className="skills_stars"></div>
    </div>
  );
};

export default SkillsItem;
