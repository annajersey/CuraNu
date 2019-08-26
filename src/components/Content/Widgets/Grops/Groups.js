import React from "react";
import "./Groups.scss";
import groupsData from "../../../../mockData/groups-data.json";

const Groups = () =>
    <ul className="groupsWidget">
        {groupsData.links.map((item, index) =>
            <li key={index}>
                {item.img &&
                <div className="linkImage"><img src={require(`./images/${item.img}.png`)} alt={item.title}/></div>}
                <a href={item.url}>{item.title}</a>
            </li>
        )}
    </ul>;

export default Groups;