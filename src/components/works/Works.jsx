import React, { useEffect, useState } from "react";
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
    console.log(index);
    setActive(index);
  };

  return (
    <section className="portfolio">
      <h2 className="title_text">Портфолио</h2>
      <p className="portfolip_title-name">
        Мои <span className="font_prim">кейсы:</span>
      </p>
      <div className="container portfolio_wrapper">
        <div className="portfolio_nav_wrapper">
          {portNav.map((x, index) => (
            <div
              onClick={(e) => handleClick(e, index)}
              key={index}
              className={`${
                active === index
                  ? "portfolio_nav_item active_nav-port"
                  : "portfolio_nav_item"
              }`}
            >
              {x.name}
            </div>
          ))}
        </div>
        <div className="portfolio_items">
          {project.map((x) => (

              <Work key={x.id} data={x} />

          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
