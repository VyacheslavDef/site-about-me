import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './components/about/About'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Skills from './components/skills/Skills'
import Works from './components/works/Works'
import Contacts from './components/contacts/Contacts'
import './style/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <Main />
        <Skills/>
        <Works/>
        <Contacts/>
    </>
)
