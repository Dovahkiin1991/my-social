import React  from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {

    let postsData = [
        { id: 1, message: 'Hello', likesCount: 12},
        { id: 2, message: 'Props send test', likesCount: 33}
    ];

    return <div className={classes.posts}>
        <h2>My posts</h2>
        <div>New post</div>

        <div>
            <Post likes={postsData[0].likesCount} message={postsData[0].message} />
            <Post likes={postsData[1].likesCount} message={postsData[1].message} />
        </div>
    </div>
}

export default MyPosts;