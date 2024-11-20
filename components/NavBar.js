import React from 'react'
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";



export default function NavBar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
            </ul>
            <div class={`form-check form-switch text-${props.mode==="light" ? "dark":"light"}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light" ? "darkMode":"lightMode"}</label>
</div>
          </div>
        </div>
      </nav>
    </div>
  )
}

NavBar.prototypes = {
    title: PropTypes.string.isRequired
}

NavBar.defaultProps = {
    title : "This is default Title"
}
