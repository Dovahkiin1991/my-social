import React  from 'react';
import classes from './../Dialogs.module.css';
import {BrowserRouter, NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={classes.dialogs__item + ' ' + classes.dialogs__item__active}>
        <NavLink to={path}> {props.name}</NavLink>
    </div>;
}

export default DialogItem;