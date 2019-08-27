import React from "react";
import "./ContactForm.scss";

const SideBar = () => {
    return (
        <aside className="sidebar">
            <h2>Submenu</h2>
            <ul>
                <li><a href={"#"}>Some Link 2</a></li>
                <li><a href={"#"}>Some Link 3</a></li>
                <li><a href={"#"}>Some Link 1</a></li>
                <li><a href={"#"}>Some Link 4</a></li>
                <li><a href={"#"}>Some Link 5</a></li>
                <li><a href={"#"}>Some Link 6</a></li>
                <li><a href={"#"}>Some Link 7</a></li>
            </ul>
        </aside>
    );
};

export default SideBar;