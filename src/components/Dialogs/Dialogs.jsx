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

    return (
        <div className={classes.blocks}>
            <div className={classes.dialogs}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />
            </div>

            <div className={classes.messages}>
                <MessageItem id={messagesData[0].id} message={messagesData[0].message} />
                <MessageItem id={messagesData[1].id} message={messagesData[1].message} />
                <MessageItem id={messagesData[2].id} message={messagesData[2].message} />
                <MessageItem id={messagesData[3].id} message={messagesData[3].message} />
                <MessageItem id={messagesData[4].id} message={messagesData[4].message} />
            </div>
        </div>
    );
}

export default Dialogs;