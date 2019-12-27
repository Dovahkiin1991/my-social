import React  from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {

    let postsData = [
        { id: 1, message: 'Hello', likesCount: 12},
        { id: 2, message: 'Props send test', likesCount: 33}
    ];

    let postsElements = postsData
        .map( posts => <Post likes={posts.likesCount} message={posts.message} />);

    return <div className={classes.posts}>
        <h2>My posts</h2>
        <div>New post</div>

        <div>
            { postsElements }
        </div>
    </div>
}

export default MyPosts;