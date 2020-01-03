import React  from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name} user_avatar={dialog.user_avatar} />);

    let messagesElements = props.state.messagesData
        .map( message => <MessageItem id={message.id} user_avatar={message.user_avatar} user_id={message.user_id} message={message.message} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    };

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
                    <textarea name="" id="" cols="20" rows="2" ref={newMessageElement}></textarea>
                    <button onClick={ addMessage }>Send message</button>
                </div>
            </div>


        </div>
    );
}

export default Dialogs;