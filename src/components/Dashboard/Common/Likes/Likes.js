import React from "react";
import "./Likes.scss";
import PropTypes from "prop-types";

const Likes = ({likes}) =>
    <div className="likes">
        <img src={require("./images/heart.png")} alt="likes"/>
        {likes}
    </div>;

Likes.propTypes = {
    likes: PropTypes.number.isRequired
};

export default Likes;