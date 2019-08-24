import React from "react";
import "./Header.scss";
import Bell from "./images/bell.svg";
import Settings from "./images/settings.svg";

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
                <div className="icon"><Settings /></div>
                <div className="icon"><Bell /><div className="notificationsCount">1</div></div>
            </div>
        </div>
        <div className="container logo">
            <div><img src={require("./images/logo.png")}/></div>
            <div className="logoTitle">Cura<span>Nu</span><div className="logoSubtitle">Zorg en welzijn</div></div>
            <div className="subtitle">Intranet</div>
        </div>
    </header>;

export default Header;