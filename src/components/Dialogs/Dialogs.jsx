import React  from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/Message';
import {addMessageCreater, onMessageChangeActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name} user_avatar={dialog.user_avatar} />);

    let messagesElements = props.state.messagesData
        .map( message => <MessageItem id={message.id} user_avatar={message.user_avatar} user_id={message.user_id} message={message.message} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageCreater());
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(onMessageChangeActionCreator(text));
    }

    return (
        <div className={classes.blocks}>
            <div className={classes.dialogs}>
                { dialogsElements }
            </div>

            <div className={classes.messages}>
                <ul>
                    { messagesElements }
                </ul>

                <div className={classes.form}>
                    <textarea name="" id="" cols="20" rows="2" ref={newMessageElement} value={props.state.newMessageText} onChange={onMessageChange}></textarea>
                    <button onClick={ addMessage }>Send message</button>
                </div>
            </div>


        </div>
    );
}

export default Dialogs;