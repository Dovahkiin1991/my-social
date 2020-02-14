import React  from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {

    let postsElements = props.posts
        .map( posts => <Post likes={posts.likesCount} message={posts.message} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST'});
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type : 'UPDATE-NEW-POST-TEXT', newText : text });
    }

    return <div className={classes.posts}>
        <h2>My posts</h2>
        <div>New post</div>

        <div>
            <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
            <button onClick={ addPost }>Add post</button>
        </div>
        <div>
            { postsElements }
        </div>
    </div>
}

export default MyPosts;