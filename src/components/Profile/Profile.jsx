import React  from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import classes from './Profile.module.css';

const Profile = (props) => {
    return <div>
        <ProfileInfo profile={props.profile} />
        <MyPostsContainer store={props.store} />
    </div>;
}

export default Profile;