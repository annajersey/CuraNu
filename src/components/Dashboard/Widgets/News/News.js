import React from "react";
import "./News.scss";
import newsData from "../../../../mockData/news-data.json";
import Likes from "../../Common/Likes/Likes";

const News = () =>
    <div className="newsWidget">
        {newsData.news.map((item, index) =>
            <div className="newsItem" key={index}>
                <div className="newsThumb"><img src={require(`./images/${item.img}.png`)} alt={item.title}/></div>
                <div className="newsBrief">
                    <div className="newsMeta">
                        <span>{item.date}</span>
                        <Likes likes={item.likes}/>
                    </div>
                    <span>{item.title}</span>
                </div>
            </div>
        )}
    </div>;

export default News;