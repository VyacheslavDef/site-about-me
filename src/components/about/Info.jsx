import React from "react";

const Info = () => {
  return (
    <div className="about_info_cards grid">
      <div className="about_info_card">
        <i className="icons uil uil-award-alt"></i>
        <h3>Опыт в IT</h3>
        <span className="about_span">Более года в IT индустрии</span>
      </div>
      <div className="about_info_card">
        <i className="icons uil uil-thumbs-up"></i>
        <h3>Выполнено</h3>
        <span className="about_span">10+ проектов выполено</span>
      </div>
      <div className="about_info_card">
      <i class='icons bx bx-code-alt'></i>
        <h3>Навыки</h3>
        <span className="about_span">Каждый день оттачиваю свои навыки</span>
      </div>
    </div>
  );
};

export default Info;
