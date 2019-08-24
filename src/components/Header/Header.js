import React from "react";
import Bell from "./bell.svg";
import Settings from "./settings.svg";

const Header = () =>
    <header>
        <container>
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
            <div>
                <Bell />
                <Settings />
            </div>
        </container>
    </header>;

export default Header;