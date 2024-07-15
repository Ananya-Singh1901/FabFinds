import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/logo.png'
import navprofileIcon from '../Assets/man_stylish.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} className='nav-logo' alt="" />
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
