import React from "react";
import "./Links.scss"
import linksData from "../../../../mockData/links-data.json";

const Links = () =>

    <ul className="linksWidget">
        {linksData.links.map((item, index) =>
            <li key={index}>
                <div><img src={require(`./images/${item.img}.png`)} alt={item.title}/></div>
                <a href={item.url}>{item.title}</a>
            </li>
        )}
    </ul>


export default Links;