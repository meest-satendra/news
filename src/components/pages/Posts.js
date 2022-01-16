import React from 'react';
import PostById from '../views/posts/PostById';
import Post from '../views/posts/Posts';
import Stories from '../views/stories/Stories';

const Posts = () => {
    return (
        <div>
            {/* <PostById /> */}
            <Post />
            <Stories />
        </div>
    )
}

export default Posts
