import React from "react";
import "./MicroBlog.scss";
import Data from "../../../../mockData/micro-blog-data.json";
import Likes from "../../Common/Likes/Likes";

const MicroBlog = () => {
    const post = Data.post[0];
    return (
        <div className="microBlog">
            <form className="microBlogForm">
                <textarea />
                <div className="formButtons">
                    <div className="addButtons">
                        <button className="AddImageButton" onClick={e => e.preventDefault()}></button>
                        <button className="AddLinkButton" onClick={e => e.preventDefault()}></button>
                    </div>
                    <button className="Send" onClick={e => e.preventDefault()}>Plaats</button>
                </div>
            </form>
            <div className="microBlogItem">
                <div className="postHeader">
                    <img  className="profilePicture" src={require(`./images/${post.profilePicture}.png`)} />
                    <div>
                        <div className="author">Ria de Vries</div>
                        <div className="postDateTime">{post.datetime}</div>
                    </div>
                    <Likes likes={post.likes}/>
                </div>
                <div className="postContent">
                    {post.content}
                    <img className="profilePicture" src={require(`./images/${post.image}.png`)} />
                    <a className="postLink" href={post.url}>Lees meer en reacties (0)</a>
                </div>

            </div>
        </div>
    );
};

export default MicroBlog;