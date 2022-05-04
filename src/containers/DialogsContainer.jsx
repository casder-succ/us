import React from 'react';

import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../store/dialogsReducer";
import Dialogs from "../components/Messages/Dialogs";

const DialogsContainer = ({store}) => {
    const state = store.getState();

    const onSend = () => {
        store.dispatch(sendMessageActionCreator())
    }

    const onMessageTextUpdate = (newText) => {
        store.dispatch(updateNewMessageTextActionCreator(newText));
    }

    return (
        <Dialogs
            onSend={onSend}
            onMessageTextUpdate={onMessageTextUpdate}
            dialogs={state.DialogsPage.dialogs}
            messages={state.DialogsPage.messages}
            newMessageText={state.DialogsPage.newMessageText}
        />
    );
};

export default DialogsContainer;