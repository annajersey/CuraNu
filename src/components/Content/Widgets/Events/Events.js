import React from "react";
import Widget from "../../Widget/Widget";
import "./Links.scss"

const Links = () =>

        <ul className="linksWidget">
            <li>
                <div><img src={require("./images/yourforce.png")} alt="yourforce"/></div>
                <span>Youforce</span>
            </li>
            <li>
                <div><img src={require("./images/topdesk.png")} alt="yourforce"/></div>
                <span>MIP-meldingen</span>
            </li>
            <li>
                <div><img src={require("./images/mip.png")} alt="yourforce"/></div>
                <span>Topdesk</span>
            </li>
        </ul>


export default Links;