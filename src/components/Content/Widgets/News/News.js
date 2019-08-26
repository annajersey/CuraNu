import React from "react";
import "./News.scss"
import newsData from "../../../../mockData/news-data.json";

const News = () =>
    <div className="newsWidget">
        {newsData.news.map((item, index) =>
            <div className="newsItem" key={index}>
                <div className="newsThumb"><img src={require(`./images/${item.img}.png`)} alt={item.title}/></div>
                <div className="newsBrief">
                    <div className="newsMeta">
                        <span>{item.date}</span>
                        <div className="likes"><img src={require("./images/heart.png")} alt="likes"/>{item.likes}</div>
                    </div>
                    <span>{item.title}</span>
                </div>
            </div>
        )}
    </div>;


export default News;