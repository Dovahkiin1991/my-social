import React  from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src="https://www.bates.edu/wordpress/files/2016/07/pattern1.jpg" alt=""/>
        </div>


        <div>
            <img width="80" src="https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/rGMF3jSims9o98x/storyblocks-flowers-in-a-garden-against-blue-sky-bottom-view_r8CAusDJM_thumb.jpg" alt=""/>
            <span className={classes.desc}>Description</span>
        </div>

        <MyPosts />
    </div>;
}

export default Profile;