import React  from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/Message';
import {addMessageCreater, onMessageChangeActionCreator} from "../../redux/messages-reducer";
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage;

    let addMessage = () => {
        props.store.dispatch(addMessageCreater());
    };

    let onMessageChange = (body) => {
        props.store.dispatch(onMessageChangeActionCreator(body));
    }

    return (<Dialogs updateNewMessageBody={onMessageChange} sendMessage={addMessage} newMessageText={state.newMessageText} dialogsPage={state} />);

}

export default DialogsContainer;