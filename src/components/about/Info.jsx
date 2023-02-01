import React from "react";

const Info = () => {
  return (
    <div className="about_info_cards grid">
      <div className="about_info_card">
        <i className="icons uil uil-award-alt"></i>
        <h3>Опыт в IT</h3>
        <span className="about_span">Более 2ух лет в IT индустрии</span>
      </div>
      <div className="about_info_card">
        <i className="icons uil uil-thumbs-up"></i>
        <h3>Выполнено</h3>
        <span className="about_span">Более 10 проектов выполено</span>
      </div>
      <div className="about_info_card">
        <i className="icons uil uil-feedback"></i>
        <h3>Цщкдв</h3>
        <span className="about_span">Более 10 проектов выполено</span>
      </div>
    </div>
  );
};

export default Info;
