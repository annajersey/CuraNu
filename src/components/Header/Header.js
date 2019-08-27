import React from "react";
import "./Header.scss";
import {Link} from "react-router-dom";
import BellIcon from "./images/bell.svg";
import SettingsIcon from "./images/settings.svg";

const Header = () =>
    <header>
        <div className="container topNav">
            <nav>
                <ul>
                    <li><a href="#">Groepen</a></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Smoelenboek</a></li>
                    <li><a href="#">Microblog</a></li>
                    <li><a href="#">Over ons</a></li>
                </ul>
            </nav>
            <div className="account">
                <div className="icon"><SettingsIcon /></div>
                <div className="icon"><BellIcon /><div className="notificationsCount">1</div></div>
            </div>
        </div>
        <div className="container logo">
            <div><Link to="/"><img src={require("./images/logo.png")}/></Link></div>
            <div className="logoTitle"><Link to="/">Cura<span>Nu</span><div className="logoSubtitle">Zorg en welzijn</div></Link></div>
            <div className="subtitle">Intranet</div>
        </div>
    </header>;

export default Header;