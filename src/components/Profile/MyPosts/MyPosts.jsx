import React  from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return <div className={classes.posts}>
        <h2>My posts</h2>
        <div>New post</div>

        <div>
            <Post likes="4" message='Hello' />
            <Post likes="22" message='Props send test' />
        </div>
    </div>
}

export default MyPosts;