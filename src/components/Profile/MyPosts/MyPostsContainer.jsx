import React  from 'react';
import {addPostActionCreater, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {
//     let state = props.store.getState();

//     let addPost = () => {
//         props.store.dispatch(addPostActionCreater());
//     };

//     let onPostChange = (text) => {
//         let action = onPostChangeActionCreator(text);
//         props.store.dispatch(action);
//     }

//     return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} 
//         posts={state.profilePage.postsData} 
//         newPostText={state.profilePage.newPostText}
//     />);
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {
            dispatch(onPostChangeActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreater());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;