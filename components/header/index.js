import React from 'react'

export default function index() {
    return (

            <nav class="navbar fixed-top navbar-expand-sm navbar-light">

                <h1>Nik Van Baak</h1>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse collapse justify-content-end" id="navbarToggler">
                <ul class="navbar-nav mt-2 mt-lg-0">
                    <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="./portfolio.html">Portfolio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="./contact.html">Contact</a>
                    </li>
                </ul>
                </div>

            </nav>

    )
}

module.exports = Header;