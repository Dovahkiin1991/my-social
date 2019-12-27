import React  from 'react';
import classes from './Dialogs.module.css';
import {BrowserRouter, NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={classes.dialogs__item + ' ' + classes.dialogs__item__active}>
        <NavLink to={path}> {props.name}</NavLink>
    </div>;
}

const MessageItem = (props) => {
    return <div className={classes.messages__item}>
        {props.message}
    </div>;
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Name 1'},
        { id: 2, name: 'Name 2'},
        { id: 3, name: 'Name 3'},
        { id: 4, name: 'Name 4'},
        { id: 5, name: 'Name 5'}
    ];

    let messagesData = [
        { id: 1, message: 'Hi'},
        { id: 2, message: 'Hi. user'},
        { id: 3, message: 'Hi test'},
        { id: 4, message: 'Test'},
        { id: 5, message: 'Test hi'}
    ];

    let dialogsElements = dialogsData
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);

    let messagesElements = messagesData
        .map( message => <MessageItem id={message.id} message={message.message} />);

    return (
        <div className={classes.blocks}>
            <div className={classes.dialogs}>
                { dialogsElements }
            </div>

            <div className={classes.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;