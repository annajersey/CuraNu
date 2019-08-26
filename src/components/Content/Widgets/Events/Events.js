import React from "react";
import "./Events.scss"
import eventsData from "../../../../mockData/events-data.json";

const Events = () =>
        <ul className="eventsWidget">
            {eventsData.news.map((item,index) =>
            <li key={index}>
                <div>{item.date}</div>
                <span>{item.event}</span>
            </li>
            )}
        </ul>


export default Events;