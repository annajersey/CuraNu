import React from "react";
import "./MainMenu.scss";

const MainMenu = () =>
    <div className="mainMenu">
        <div className="container">
            <nav>
                <ul>
                    <li><a href="#">ARTIKELEN</a></li>
                    <li><a href="#">NIEUWS</a></li>
                    <li><a href="#">EVENEMENTEN</a></li>
                    <li><a href="#">KWALITEITSHANDBOEK</a></li>
                </ul>
            </nav>
            <form className="searchBox">
                <input type="text"/>
                <button className="searchButton" onClick={e => e.preventDefault()}/>
            </form>
        </div>
    </div>;

export default MainMenu;