import React, { useState } from 'react'
import './headers_style.css'

const Header = () => {
  const [Toggle, setToggle] = useState(false) 
  return (
    <header className='header'>
        <nav className='nav_items container'>
            <a className='nav_title mr-16' href='#main'>VyaceslavDef</a>
            <div className="nav_menu">
                <ul className={Toggle ? "nav_list show" : 'nav_list'}>
                    <li className="nav_item"><a className='nav_link' href="/">Обо мне</a></li>
                    <li className="nav_item"><a className='nav_link' href="/">Skills</a></li>
                    <li className="nav_item"><a className='nav_link' href="/">Портфолио</a></li>
                    <li className="nav_item"><a className='nav_link' href="/">Контакты</a></li>
                </ul>
            </div>
            <i onClick={()=> setToggle(!Toggle)} className={Toggle ? 'bx bx-x' : 'bx bx-menu'}></i>
        </nav>
    </header>
  )
}

export default Header