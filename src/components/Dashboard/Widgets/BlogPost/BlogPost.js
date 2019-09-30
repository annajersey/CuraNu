import React from "react";
import PropTypes from "prop-types";
import "./BlogPost.scss";
import Likes from "../../Common/Likes/Likes";

const BlogPost = ({post}) => {
    return (
        <div className="blogPost">
            <div className="postHeader">
                <img className="profilePicture"
                    src={require(`./images/ProfilePictures/${post.profilePicture}.png`)} />
                <div>
                    <div className="author">{post.name}</div>
                    <div className="postDateTime">{post.datetime}</div>
                </div>
                <Likes likes={post.likes}/>
                {post.comments && <div className="comments">
                    <img src={require("./images/comments.png")} alt="comments"/>
                    {post.comments}
                </div>}
            </div>
            <div className="postContent">
                {post.content}
                {post.image && <img src={require(`./images/PostData/${post.image}.png`)} />}
                {post.url && <a className="postLink" href={post.url}>Lees meer en reacties (0)</a>}
            </div>
        </div>
    );
};

BlogPost.propTypes = {
    post: PropTypes.shape({
        profilePicture: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        url: PropTypes.string,
        datetime: PropTypes.string.isRequired,
        likes: PropTypes.string,
        comments: PropTypes.string,
        image: PropTypes.string,
        title: PropTypes.string,
        name: PropTypes.string

    }),
};

export default BlogPost;