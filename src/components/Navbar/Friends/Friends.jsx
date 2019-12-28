import React from 'react';
import classes from './Friends.module.css';

const Friends = (props) => {
    // debugger;
    let friendsList = props.state.friends
        .map(friend => <div className={classes.friends__item}><a href="#">
            <img width="30" src={friend.user_avatar} alt={friend.name}/>
        </a></div>);

    return (
        <div className={classes.friends}>
            <span className={classes.friends__title}>{props.state.title}</span>
            { friendsList }
        </div>
    );
}

export default Friends;