import React, {useState} from "react";
import Masonry from "react-masonry-component";
import Widget from "./Widget/Widget";
import "./Content.scss"
import Links from "./Widgets/Links/Links";
import Accordion from "./Accordion/Accordion";

const Content = () => {
    const [rerender, setRerenderLayout] = useState(1);
   return  <div className="content container">
        <Masonry
            options={{horizontalOrder: true,  columnWidth: '.grid-sizer', gutter: '.gutter-sizer',
                itemSelector: '.grid-block',
                percentPosition: true}}
        >
            <div className="grid-sizer"></div>
            <div className="gutter-sizer"></div>
            <div className="grid-block">
                <Accordion
                    firstActiveItem={1}
                    singleOpen={true}
                    setRerenderLayout={setRerenderLayout}/>
            </div>
            <div className="grid-block">
                <Widget icon={require("./Widgets/widgetIcons/external-link.png")} title="Direct Naar">
                    test test test test test test
                    test test test test test test
                    test test test test test test
                    test test test test test test
            </Widget></div>

            <div className="grid-block"><Widget icon={require("./Widgets/widgetIcons/external-link.png")} title="Direct Naar">

                test test test test test test
            </Widget></div>
            <div className="grid-block"><Links /></div>
            <div className="grid-block"><Widget icon={require("./Widgets/widgetIcons/external-link.png")} title="Direct Naar">

                test test test test test test
            </Widget></div>
        </Masonry>
    </div>}


export default Content;