import React from "react";
import PropTypes from "prop-types";
import "./Widget.scss";
import HideButton from "./images/arrow-right.svg";
import CloseButton from "./images/close-button.svg";


const Widget = ({icon, title, children}) =>
    <div className="widget">
        <div className="widgetHeader">
            <div className="widgetIcon icon"><img src={icon} /></div>
            <div className="widgetTitle">{title}</div>
            <div className="widgetButtons">
            <div className="hideButton icon"><HideButton /></div>
            <div className="closeButton icon"><CloseButton /></div>
            </div>
        </div>
        <div className="widgetContent">
            {children}
        </div>
    </div>


Widget.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
    };

export default Widget;