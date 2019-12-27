import React  from 'react';
import classes from './../Dialogs.module.css';
import {BrowserRouter, NavLink} from "react-router-dom";

const Message = (props) => {
    return <div className={classes.messages__item}>
        {props.message}
    </div>;
}

export default Message;