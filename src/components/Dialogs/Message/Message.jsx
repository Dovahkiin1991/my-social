import React  from 'react';
import classes from './../Dialogs.module.css';

const Message = (props) => {
    return <li className={(props.user_id === 1 ? classes.sent : classes.replies)}>
        <img src={props.user_avatar} alt=""/>
        <p>{props.message}</p>
    </li>;
}

export default Message;