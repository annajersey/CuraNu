import React from "react";
import Widget from "../Widget/Widget";
import "./Content.scss"
import Links from "./Widgets/Links/Links";
import AccordionItem from "./Accordion/AccordionItem";
import Accordion from "./Accordion/Accordion";
const Content = () =>
    <div className="content container">
        <Accordion />
        <Widget icon={require("./Widgets/widgetIcons/external-link.png")} title="Direct Naar">
            content  content content  content  content content content  content content content  content content
            content  content content  content  content content content  content content content  content content
            content  content content  content  content content content  content content content  content content
            content  content content  content  content content content  content content content  content content
            content  content content  content  content content content  content content content  content content
            content  content content  content  content content content  content content content  content content
            content  content content  content  content content content  content content content  content content
            content  content content  content  content content content  content content content  content content
        \</Widget>
        <Links />

        <Widget icon={require("./Widgets/widgetIcons/external-link.png")} title="Direct Naar">
            content content
        </Widget>
        <Widget icon={require("./Widgets/widgetIcons/external-link.png")} title="Direct Naar">
            content
        </Widget>
    </div>


export default Content;