import React from "react";
import { Link } from "react-router-dom"
import "../styles/Pageconstant.css"

function Pageconstant() {
    return (
        <div className="body">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/"> Dan Bushong </Link>
                <div>
                    <ul className="navbar-nav">
                        
                        <li className="nav-item">
                            <Link to="/" className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>About</Link> 
                        </li>

                        <li className="nav-item">
                            <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link> 
                        </li>

                        <li className="nav-item">
                            <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link> 
                        </li>

                    </ul>
                </div>

            </nav>
            <footer className="footer">Thanks for stopping by my website! Connect with me on LinkedIn
                <a href="https://www.linkedin.com/in/danbushong/"> Here!
                </a>
            </footer>
        </div>
    )
}
export default Pageconstant