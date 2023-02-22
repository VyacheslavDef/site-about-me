import React from 'react'
import title_img from '../../img/pidjak.png'

const Main = () => {
    return (
        <section className="main">
            <div className="main_wrapper">
                <p className="main_text">
                    Привет! <span className="main_span_prim">меня зовут</span>
                </p>
                <h1 className="main_title_text">
                    <span className="main_span_prim">Вячеслав </span>Четвертаков
                </h1>
                <p className="main_job">
                    <span className="main_span_prim">Я </span>
                    <b className="second_font">Frontend разработчик</b>
                </p>
                <div className="main_img_wrapper">
                    <div className="main_banner">
                        <img
                            className="main_title_img"
                            src={title_img}
                            alt=""
                        />
                    </div>
                    <p className='main_data main_data_one'>
                      <span className='text_data_lg'>2+ </span>
                      <span>года </span>
                      <span>опыта</span>
                    </p>
                    <p className='main_data main_data_two'>
                      <span className='text_data_lg'>10+ </span>
                      <span>проектов </span>
                      <span className='text_data_sm'>выполнено</span>
                    </p>
                </div>
                <p className="main_about">
                    из Москвы. Занимаюсь разработкой web страниц и интерфейсов
                </p>
            </div>
        </section>
    )
}

export default Main
