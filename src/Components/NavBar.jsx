import React from 'react'
import './cssFiles/navbar.css';

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className='navbar'>
        <ul className='element'>
            <li className='contact'><Link to={"/Contact"}>Contact Us</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar