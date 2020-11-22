import React from 'react'
import { Navbar } from "react-bootstrap";
import './style.css'

export default function header(props) {


    let homeIsCurrent = (pageBool) => {
        return pageBool ? <span className="sr-only">(current)</span> : "";
    }

    let portfolioIsCurrent = (pageBool) => {  
        return pageBool ? "" : <span className="sr-only">(current)</span>;
    }

    return (

        <Navbar className="navbar fixed-top navbar-expand-sm navbar-light">

            <h1>Nik Van Baak</h1>

            <div className=" navbar-collapse justify-content-end" id="navbarToggler">
            <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home {homeIsCurrent(props.homeIsCurrent)}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./portfolio.html">Portfolio {portfolioIsCurrent(props.homeIsCurrent)}</a>
                </li>
            </ul>
            </div>
        </Navbar>

    )
}