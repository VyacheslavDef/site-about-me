import React, { useEffect, useState } from "react";
import "./works_style.css";
import { port } from "./Data";
import { portNav } from "./Data";
import Work from "./Work";

const Works = () => {
  const [item, setItem] = useState({ name: "All" });
  const [project, setProject] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All") {
      setProject(port);
    } else {
      const newProject = port.filter((project) => {
        return project.category === item.name;
      });
      setProject(newProject);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    console.log(index)
    setActive(index)
  };

  return (
    <div className="portfolio_wrapper container">
      <h2 className="title_text">Портфолио</h2>
      <div className="choise_wrapper mb-24">
        {portNav.map((item, index) => {
          return (
            <span
              onClick={(e) => handleClick(e, index)}
              className={`${active === index ? 'active_choise' : ''} choise_works`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="works_items grid">
        {project.map((x) => (
          <Work key={x.id} data={x} />
        ))}
      </div>
    </div>
  );
};

export default Works;
