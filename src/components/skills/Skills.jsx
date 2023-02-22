import React from "react";
import SkillsItem from "./SkillsItem";

const Skills = () => {
  const skillsArray = [
    {id: 1, icons:"bx bxl-html5 html", name: 'HTML', percent: 90, description: ''},
    {id: 2, icons:"bx bxl-css3 css", name: 'CSS', percent: 80, description: ''},
    {id: 3, icons:"bx bxl-sass sass", name: 'SASS', percent: 80, description: ''},
    {id: 4, icons:"bx bxl-javascript js", name: 'Javascripts', percent: 85, description: ''},
    {id: 5, icons:"bx bxl-react react", name: 'REACT', percent: 70, description: ''},
    {id: 6, icons:"bx bxl-git", name: 'GIT', percent: 70, description: ''},
  ]
  return (
    <section className="skills">
      <h2 className="title_text">Мои профессиональные навыки</h2>
      <div className="container skills_wrapper grid">
        {skillsArray.map((x) => <SkillsItem key={x.id} array={x}/>)}
      </div>
    </section>
  );
};

export default Skills;