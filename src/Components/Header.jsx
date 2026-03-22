import React from 'react'
import '../App.css'
const Header = () => {
  return (
    <div className='header-container'>
        <img src="/header_logo.png" alt="Header Logo" className='header-logo' />
        <p className='live-container'> <span className='live-badge'></span>Live</p>
    </div>
  )
}

export default Header