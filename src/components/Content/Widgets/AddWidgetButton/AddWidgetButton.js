import React from "react";
import "./AddWidgetButton.scss";
import CloseButton from "../../../../assets/images/close-button.svg";

const AddWidgetButton = () =>
    <button className="addWidgetButton">
            Widget toevoegen
        <span className="icon"><CloseButton /></span>
    </button>;

export default AddWidgetButton;