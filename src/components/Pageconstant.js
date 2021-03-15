import React from "react";
import "../styles/Pageconstant.css"

function Pageconstant() {
    return(
        <body className="body">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="index.html">Dan Bushong</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="index.html">About me </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="portfolio.html">Portfolio</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>
        </div>

    </nav>
            <footer className="footer">Thanks for stopping by my website! Connect with me on LinkedIn
                <a href="https://www.linkedin.com/in/danbushong/"> Here!
                </a>
            </footer>
        </body>
    )
}
export default Pageconstant