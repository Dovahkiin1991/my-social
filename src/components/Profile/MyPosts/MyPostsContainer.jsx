// import React  from 'react';
import {addPostActionCreater, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

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