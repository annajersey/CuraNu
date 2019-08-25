import React, {useState} from "react";
import AccordionItem from "./AccordionItem";
import "../../Widget/Widget.scss";
import accordionData from "../../../mockData/accordion-data";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const accordionItems = accordionData.accordion.map(
        (item, index) => <AccordionItem
            key={index+1}
            title={item.title}
            content={item.content}
            active={(index+1) === activeIndex}
            setActiveIndex = {() => toggleActive(index+1)}
        />);

    const toggleActive = (key) => {
        setActiveIndex(activeIndex===key ? 0 : key)
    }
    return <div className="widget">
        {accordionItems}
    </div>
}

export default Accordion;