import React from "react";
import "./Header.scss";
import BellIcon from "./images/bell.svg";
import SettingsIcon from "./images/settings.svg";

const Header = () =>
    <header>
        <div className="container topNav">
            <nav>
                <ul>
                    <li>Groepen</li>
                    <li>Contact</li>
                    <li>FAQ</li>
                    <li>Smoelenboek</li>
                    <li>Microblog</li>
                    <li>Over ons</li>
                </ul>
            </nav>
            <div className="account">
                <div className="icon"><SettingsIcon /></div>
                <div className="icon"><BellIcon /><div className="notificationsCount">1</div></div>
            </div>
        </div>
        <div className="container logo">
            <div><a href="#"><img src={require("./images/logo.png")}/></a></div>
            <div className="logoTitle">Cura<span>Nu</span><div className="logoSubtitle">Zorg en welzijn</div></div>
            <div className="subtitle">Intranet</div>
        </div>
    </header>;

export default Header;