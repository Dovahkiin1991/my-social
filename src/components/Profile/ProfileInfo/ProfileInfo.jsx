import React  from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    } else {
        return <div>
            <div>
                <img src="https://www.bates.edu/wordpress/files/2016/07/pattern1.jpg" alt=""/>
            </div>

            <div>
                <h2>{props.profile.fullName}</h2>
                <img width="80" src={props.profile.photos.large} alt=""/>
                <h4>Description</h4>
                <span className={classes.desc}>{props.profile.aboutMe}</span>
            </div>

        </div>;
    }
    
}

export default ProfileInfo;