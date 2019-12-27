import React  from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {

    let postsElements = props.postsData
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