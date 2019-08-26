import React, {useState, useEffect} from "react";
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
        setTimeout(() => props.setRerenderLayout(Math.random()), 400)
    }, [activeIndexes]);

    const toggleActive = (key) =>{
        const selected = isItemActive(key);
        if(props.singleOpen){
            setActiveIndexes(selected ? [] : [key])
        }else{
            if(selected) {
                setActiveIndexes(activeIndexes.filter(i => i !== key))
            }else{
                setActiveIndexes([...activeIndexes].concat([key]))
            }
        }
    };

    return <div className={`widget ${props.className}`}>
        {accordionItems}
    </div>
}

export default Accordion;