import React from "react";
import PropTypes from "prop-types";
import "./Widget.scss";
import Arrow from "../../../assets/images/arrow-right.svg";
import CloseButton from "../../../assets/images/close-button.svg";

const Widget = ({title, className, type, children, showMore}) =>
    <div className={`widget ${className}`}>
        <div className="widgetHeader">
            <div className="widgetIcon icon">{type&&<img src={require(`./widgetIcons/${type}.png`)} />}</div>
            <div className="widgetTitle">{title}</div>
            <div className="widgetButtons">
                <div className="hideButton icon"><Arrow /></div>
                <div className="closeButton icon"><CloseButton /></div>
            </div>
        </div>
        <div className="widgetContent">
            {children}
        </div>
        {showMore &&
        <a className="showMore" href="#">
            {showMore}
            <div className="icon"><Arrow /></div>
        </a>}
    </div>;

Widget.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    showMore: PropTypes.string
};

export default Widget;