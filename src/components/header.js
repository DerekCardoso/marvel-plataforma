import React from 'react'
import logo from '../img/Marvel_Logo.png'
import './header.css'

const Header = () => {
    return (
        <header className="nav logo">
            <img src={logo} />
        </header>
    )
}

export default Header
