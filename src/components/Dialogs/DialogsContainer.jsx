// import React  from 'react';
// import classes from './Dialogs.module.css';
// import DialogItem from './DialogItem/DialogItem';
// import MessageItem from './Message/Message';
import {addMessageCreater, onMessageChangeActionCreator} from "../../redux/messages-reducer";
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.messagesPage,
        newMessageText: state.messagesPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(onMessageChangeActionCreator(body));
        },
        sendMessage: () => {
            dispatch(addMessageCreater());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;