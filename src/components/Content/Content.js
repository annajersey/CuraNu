import React from "react";
import Widget from "../Widget/Widget";
import "./Content.scss"
import Links from "./Widgets/Links/Links";
const Content = () =>
    <div className="content container">
        <Widget icon={require("./Widgets/widgetIcons/external-link.png")} title="Direct Naar">
            content
        </Widget>
        <Links />
        <Widget icon={require("./Widgets/widgetIcons/external-link.png")} title="Direct Naar">
            content
        </Widget>
        <Widget icon={require("./Widgets/widgetIcons/external-link.png")} title="Direct Naar">
            content
        </Widget>
        <Widget icon={require("./Widgets/widgetIcons/external-link.png")} title="Direct Naar">
            content
        </Widget>
    </div>


export default Content;