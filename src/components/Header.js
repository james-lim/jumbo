import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar } from '../includes/NavBar'

export default class Header extends Component {
  render () {
    return (
      <div id="header-wrapper">
        <div id="header" className="container">
          <h1 id="logo"><Link to="/">Deliphant</Link></h1>
          <NavBar/>
        </div>
        {this.props.children}
      </div>
    )
  }
}
