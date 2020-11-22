import React from 'react'
import './style.css'

export default function header(props) {

    return (
        <nav className="navbar fixed-top navbar-expand-sm navbar-light">
            <h1>Nik Van Baak</h1>
            <div className=" navbar-collapse justify-content-end" id="navbarToggler">
            <ul className="navbar-nav mt-2 mt-lg-0">
                <li className={props.homeClass}>
                    <a className="nav-link" onClick={props.goToHome} href="#">Home</a>
                </li>
                <li className={props.portfolioClass}>
                    <a className="nav-link" onClick={props.goToPortfolio} href="#">Portfolio </a>
                </li>
            </ul>
            </div>
        </nav>

    )
}