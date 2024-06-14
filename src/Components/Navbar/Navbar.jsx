import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img src={menu_icon} alt="" />
        <img src={logo} alt="" />
      </div>
    </nav>
  )
}

export default Navbar
