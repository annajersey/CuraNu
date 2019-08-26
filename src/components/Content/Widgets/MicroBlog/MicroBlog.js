import React from "react";
import "./MicroBlog.scss";
import Data from "../../../../mockData/micro-blog-data.json";
import BlogPost from "../BlogPost/BlogPost";

const MicroBlog = () => {
    return (
        <div className="microBlog">
            <form className="microBlogForm">
                <textarea/>
                <div className="formButtons">
                    <div className="addButtons">
                        <button className="AddImageButton" onClick={e => e.preventDefault()}></button>
                        <button className="AddLinkButton" onClick={e => e.preventDefault()}></button>
                    </div>
                    <button className="Send" onClick={e => e.preventDefault()}>Plaats</button>
                </div>
            </form>
            <BlogPost post = {Data.post}/>
        </div>
    );
};

export default MicroBlog;