import React  from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);

    let messagesElements = props.state.messagesData
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