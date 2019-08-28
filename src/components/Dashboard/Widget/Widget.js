import React, {useRef, useState} from "react";
import PropTypes from "prop-types";
import "./Widget.scss";
import Arrow from "../../../assets/images/arrow-right.svg";
import CloseButton from "../../../assets/images/close-button.svg";

const Widget = ({title, className, type, children, showMore, rerender}) => {
    const content = useRef(null);
    const [height, setHeight] = useState(null);

    const toggleWidget = () => {
        setHeight(height === 0 ? content.current.scrollHeight : 0);
        setTimeout(() => rerender(Math.random()), 100);
    };
    console.log(height);
    return <div className={`widget ${className}`}>
        <div className="widgetHeader">
            <div className="widgetIcon icon">{type&&<img src={require(`./widgetIcons/${type}.png`)} />}</div>
            <div className="widgetTitle">{title}</div>
            <div className="widgetButtons">
                <div className="hideButton icon" onClick={toggleWidget}><Arrow /></div>
                <div className="closeButton icon"><CloseButton /></div>
            </div>
        </div>
        <div className="widgetContentWrapper" ref={content} style={{ height: (height===null ? "auto" : `${height}px`) }}>
            <div className="widgetContent">{children}</div>
        </div>
        {showMore &&
        <a className="showMore" href="#">
            {showMore}
            <div className="icon"><Arrow /></div>
        </a>}
    </div>;
};

Widget.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    showMore: PropTypes.string,
    rerender: PropTypes.func,
};

export default Widget;
