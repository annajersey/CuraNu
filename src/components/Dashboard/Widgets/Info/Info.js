import React from "react";
import PropTypes from "prop-types";
import "./Info.scss";

const Info = ({data}) =>
    <ul className="infoWidget">
        {data.links.map((item, index) =>
            <li key={index}>
                <div>
                    <a href={item.url}>{item.title}</a>
                    <div className="dateUpdated">bijgewerk / {item.date}</div>
                </div>
            </li>
        )}
    </ul>;

Info.propTypes = {
    data: PropTypes.object.isRequired
};
export default Info;