import React, {useState} from "react";
import Masonry from "react-masonry-component";
import Widget from "./Widget/Widget";
import "./Content.scss";
import Links from "./Widgets/Links/Links";
import Accordion from "./Accordion/Accordion";
import Events from "./Widgets/Events/Events";
import News from "./Widgets/News/News";
import linksData from "../../mockData/links-data.json";
import linksData2 from "../../mockData/links2-data.json";
import linksManualData from "../../mockData/manual-links-data.json";
import Info from "./Widgets/Info/Info";
import Polls from "./Widgets/Polls/Polls";

const Content = () => {
    const [rerender, setRerenderLayout] = useState(1);
    return <div className="content container">
        <Masonry options={{
            horizontalOrder: true, columnWidth: ".grid-sizer", gutter: ".gutter-sizer",
            itemSelector: ".grid-block",
            percentPosition: true
        }}>
            <div className="grid-sizer"></div>
            <div className="gutter-sizer"></div>

            /*---- Widgets list starts ----*/

            <Accordion className="grid-block"
                firstActiveItem={1}
                singleOpen={true}
                setRerenderLayout={setRerenderLayout}/>

            <Widget type="links" title="Direct Naar" className="grid-block">
                <Links data={linksData}/>
            </Widget>
            <Widget type="info" title="PEILINGEN" className="grid-block">
                <Polls />
            </Widget>
            <Widget type="links" title="MIJN LINKS" className="grid-block">
                <Links data={linksData2}/>
            </Widget>
            <Widget type="info" title="KWALITEITSHANDBOEK" className="grid-block" showMore="Naar kwaliteitshandboek">
                <Info data={linksManualData}/>
            </Widget>
            <Widget className="grid-block" type="events" title="EVENEMENTEN" showMore="Meer evenementen">
                <Events />
            </Widget>
            <Widget className="grid-block" type="events" title="NIEUWS" showMore="Meer nieuws">
                <News />
            </Widget>
        </Masonry>
    </div>;
};

export default Content;