import React, {useState} from "react";
import Masonry from "react-masonry-component";
import Widget from "./Widget/Widget";
import "./Content.scss"
import Links from "./Widgets/Links/Links";
import Accordion from "./Accordion/Accordion";
import Events from "./Widgets/Events/Events";
import News from "./Widgets/News/News";

const Content = () => {
    const [rerender, setRerenderLayout] = useState(1);
    return <div className="content container">
        <Masonry options={{
                horizontalOrder: true, columnWidth: '.grid-sizer', gutter: '.gutter-sizer',
                itemSelector: '.grid-block',
                percentPosition: true
            }}>
            <div className="grid-sizer"></div>
            <div className="gutter-sizer"></div>

            <Accordion className="grid-block"
                       firstActiveItem={1}
                       singleOpen={true}
                       setRerenderLayout={setRerenderLayout}/>

            <Widget type="links" title="Direct Naar" className="grid-block">
                <Links/>
            </Widget>
            <Widget className="grid-block" type="events" title="EVENEMENTEN" showMore="Meer evenementen">
                <Events />
            </Widget>
            <Widget className="grid-block" type="events" title="NIEUWS" showMore="Meer nieuws">
                <News />
            </Widget>
        </Masonry>
    </div>
}


export default Content;