import React from 'react'
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav id="nav">
      <ul>
        <li><Link to="/pick-jumbo">Pick Jumbo</Link></li>
        <li><Link to="/pick-symbol">Pick Symbol</Link></li>
        <li className="break"><Link to="/my-jumbo">My Jumbo</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  )
}
