import React from "react";
import Widget from "../../Widget/Widget";
import "./Links.scss"

const Links = () => <Widget icon={require("../widgetIcons/external-link.png")} title="Direct Naar">
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
</Widget>

export default Links;