import React from "react";
import PropTypes from "prop-types";
import "./Links.scss";

const Links = ({data}) =>
    <ul className="linksWidget">
        {data.links.map((item, index) =>
            <li key={index}>
                {item.img&&<div><img src={require(`./images/${item.img}.png`)} alt={item.title}/></div>}
                <a href={item.url}>{item.title}</a>
            </li>
        )}
    </ul>;

Links.propTypes = {
    data: PropTypes.object.isRequired
};
export default Links;