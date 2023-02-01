import React from 'react'
import Info from './Info'
import img from '../../img/pidjak.png'
import './about_style.css'

const About = () => {
  return (
    <div className='about container'>
        <h2 className='title_text'>Немного обо мне</h2>
        <div className="about_wrapper grid">
            <img className='about_img' src={img} alt="" />
            <div className="about_data">
                <Info/>
                <p>FrontEnd разработчик. Творю на web просторах</p>
            </div>
        </div>
    </div>
  )
}

export default About