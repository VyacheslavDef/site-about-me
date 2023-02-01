import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contacts_style.css";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_njp88ng",
        "template_vntd717",
        form.current,
        "bMb1HHPxPDfYMSMuF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h2 className="title_text">Контакты</h2>
      <div className="contacts_wrapper container grid">
        <div className="contacts_items">
          <h3 className="ta_c">Соц сети</h3>
          <div className="contacts_item">
            <p className="contacts_item_name">Telegram</p>
            <span>@slavdyha</span>
            <span></span>
          </div>
          <div className="contacts_item">
            <p className="contacts_item_name">Whats'App</p>
            <span>+7(929)-953-43-52</span>
            <span></span>
          </div>
          <div className="contacts_item">
            <p className="contacts_item_name">GitHub</p>
            <span>
              <a href="/">github.com/VyacheslavDef</a>
            </span>
            <span></span>
          </div>
        </div>
        <div className="contacts_form_mail">
        <h3 className="ta_c mb-50">Напишите мне письмо!</h3>
          <form ref={form} onSubmit={sendEmail} className="contacts_form">
            <div className="contacts_form_wrapper">
              <label className="contacts_form-tag">Name</label>
              <input
                className="contacts_form-input"
                placeholder="Ваше имя"
                type="text"
                name="name"
              />
            </div>
            <div className="contacts_form_wrapper">
              <label className="contacts_form-tag">Email</label>
              <input
                className="contacts_form-input"
                placeholder="Ваш Email"
                type="email"
                name="email"
              />
            </div>
            <div className="contacts_form_wrapper contacts_form-area">
              <label className="contacts_form-tag">Опишите</label>
              <textarea
                className="contacts_form-input"
                placeholder="Опишите ваше обращение"
                name="project"
                cols="30"
                rows="10"
              ></textarea>
                          <button className="button_contacts">Отправить</button>
            </div>
            {/* <button className="button_contacts">Отправить</button> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacts;
