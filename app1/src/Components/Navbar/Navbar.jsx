import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Style from '../Navbar/Navbar.module.css'
export default function Navbar() {
  return <>
  <nav className={`${Style.navbar} navbar navbar-expand-lg py-4`}>
  <div className="container">
    <Link className={`${Style.colorWhite} ${Style.start} navbar-brand fw-bolder`} to={'/'}>START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={`${Style.colorWhite} nav-link fw-bolder`} to={'about'}>ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`${Style.colorWhite} nav-link fw-bolder ms-3`} to={'portfolio'}>PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`${Style.colorWhite} nav-link fw-bolder ms-3`} to={'contact'}>CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
}
