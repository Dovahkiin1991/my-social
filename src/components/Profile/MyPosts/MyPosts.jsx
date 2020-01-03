import React  from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {

    let postsElements = props.postsData
        .map( posts => <Post likes={posts.likesCount} message={posts.message} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)

        newPostElement.current.value = '';
    };

    return <div className={classes.posts}>
        <h2>My posts</h2>
        <div>New post</div>

        <div>
            <textarea name="" id="" cols="30" rows="3" ref={newPostElement}></textarea>
            <button onClick={ addPost }>Add post</button>
        </div>
        <div>
            { postsElements }
        </div>
    </div>
}

export default MyPosts;