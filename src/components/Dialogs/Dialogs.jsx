import React  from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/Message';

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