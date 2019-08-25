import React, { useState, useRef, useEffect } from "react";
import "./Accordion.scss";
import "../Widget/Widget.scss";
import Arrow from "./images/arrow-right.svg"

const AccordionItem = (props) =>{
    const content = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setHeight(props.active ? content.current.scrollHeight : 0);
    }, [props.active]);

    const itemClass = props.active ? "accordionItem activeAccordionItem" : "accordionItem"
    return (
        <div className={itemClass}>
            <div className="accordionItemHeader" onClick={props.setActiveIndex}>
                <p className="widgetTitle">{props.title}</p>
                <div className="icon"><Arrow /></div>
            </div>
            <div
                ref={content}
                style={{ height: `${height}px` }}
                className="accordionContent"
            >
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default AccordionItem;