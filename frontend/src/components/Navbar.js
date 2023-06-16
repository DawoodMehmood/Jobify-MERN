import React from 'react'
import { Link } from 'react-router-dom'
import Weather from './Weather'

const Navbar = () => {

  return (
    <nav className="navbar">
      <h1 className="navbar__title">Jobify</h1>
      <ul className="navbar__links">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/post-job" className="navbar__link">
            Post Job
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/about" className="navbar__link">
            About Us
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/contact" className="navbar__link">
            Contact Us
          </Link>
        </li>

        
        <Weather />
        

      </ul>
    </nav>

  )
}

export default Navbar