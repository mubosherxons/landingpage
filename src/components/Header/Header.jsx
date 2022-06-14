import React from "react";
import "./style.css"
import NavbarLogo from "../../images/navbar-logo.svg"

const Navbar = (props) => {
    return(
        <div className="main__header">
           <a href="#">
            <img src={NavbarLogo} alt="navbar-logo" />
           </a>
           <div className="navbar__list-container">
                <ul className="navbar-list_item">
                    <li className="nav-link">
                        <a href="#">About</a>
                    </li>
                    <li className="nav-link">
                        <a href="#">Features</a>
                    </li>
                    <li className="nav-link">
                        <a href="#">How to Use</a>
                    </li>
                    <li className="nav-link">
                        <a href="#">Download</a>
                    </li>
                </ul>
           </div>
        </div>
    )
}

export default Navbar;