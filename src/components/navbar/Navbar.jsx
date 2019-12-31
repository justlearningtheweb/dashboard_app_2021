import React from 'react'
// import { Link } from 'react-router-dom'
import './navbar.scss'

function Navbar() {
  return (
    <nav className="navbar_container">
      <div className="navbar_item">
        <p>Andromeda</p>
        <ul className="navbar_link">
          <li>Overview</li>
          <li>Analytics</li>
          <li>Data</li>
          <li>Alerts</li>
        </ul>
      </div>
      <div className="control_container">
        <p>placeholder</p>
        {/* <button className="button_login">Login</button> */}
        {/* <button className="button_sign">Sign Up</button> */}
      </div>
    </nav>
  )
}

export default Navbar