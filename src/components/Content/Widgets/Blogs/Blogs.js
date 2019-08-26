import React from 'react';
import PropTypes from 'prop-types';
import "./Blogs.scss"
import BlogPost from "../BlogPost/BlogPost";

const Blogs = ({posts}) => {
    return (
        <div className="blogsWidget">
            {posts.map(post => <BlogPost post={post} />)}
        </div>
    );
};

Blogs.propTypes = {
    posts: PropTypes.array.isRequired
};

export default Blogs;