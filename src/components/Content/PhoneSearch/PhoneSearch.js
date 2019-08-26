import React from "react";
import "./PhoneSearch.scss";
import PropTypes from "prop-types";

const PhoneSearch = ({className}) => {
    return (
        <div className={`phoneSearch ${className}`}>
            <div className="phoneSearchTitle">TELEFOONBOEK</div>
            <div className="phoneSearchDescription">Vind collega’s op naam, trefwoord, functie, etc.</div>
            <form className="searchPhone">
                <input type="text"/>
                <button onClick={e => e.preventDefault()}/>
            </form>
        </div>
    );
};

PhoneSearch.propTypes = {
    className: PropTypes.string
};

export default PhoneSearch;