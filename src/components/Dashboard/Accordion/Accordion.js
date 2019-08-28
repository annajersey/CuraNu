import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import AccordionItem from "./AccordionItem";
import "../Widget/Widget.scss";
import accordionData from "../../../mockData/accordion-data";

const Accordion = (props) => {
    const [activeIndexes, setActiveIndexes] = useState([props.firstActiveItem]);
    const isItemActive = index => (activeIndexes.indexOf(index) >= 0);
    const accordionItems = accordionData.accordion.map(
        (item, index) => <AccordionItem
            key={index + 1}
            title={item.title}
            content={item.content}
            active={isItemActive(index+1)}
            setActiveIndex={() => toggleActive(index + 1)}
        />);

    useEffect(() => {
        setTimeout(() => props.rerender(Math.random()), 400);
    }, [activeIndexes]);

    const toggleActive = (key) =>{
        const selected = isItemActive(key);
        if (props.singleOpen){
            setActiveIndexes(selected ? [] : [key]);
        } else {
            if (selected) {
                setActiveIndexes(activeIndexes.filter(i => i !== key));
            } else {
                setActiveIndexes([...activeIndexes].concat([key]));
            }
        }
    };

    return <div className={`widget ${props.className}`}>
        {accordionItems}
    </div>;
};

Accordion.propTypes = {
    singleOpen: PropTypes.bool,
    rerender: PropTypes.func,
    firstActiveItem: PropTypes.number,
    className: PropTypes.string
};

export default Accordion;
