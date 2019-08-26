import React from 'react';
import Events from "../Dashboard/Widgets/Events/Events";
import News from "../Dashboard/Widgets/News/News";
import Groups from "../Dashboard/Widgets/Grops/Groups";
import "./ContactForm.scss"
import linksData from "../../mockData/links-data";
import Links from "../Dashboard/Widgets/Links/Links";

const SideBar = () => {
    return (
        <aside className="sidebar">
            <Links data={linksData}/>
            <Links data={linksData}/>
            <br />
        </aside>
    );
};

export default SideBar;