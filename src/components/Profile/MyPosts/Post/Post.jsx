import React  from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return <div className={classes.post}>
        <span>{props.message}</span>
        <span className={classes.count}>Likes: <b>{props.likes}</b></span>
    </div>
}

export default Post;