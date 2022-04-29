import React from 'react';
import s from './Dialogs.module.scss'
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../store/state";

const Dialogs = (props) => {
    const onSend = () => {
        props.dispatch(sendMessageActionCreator())
    }

    const onMessageTextUpdate = (e) => {
        const message = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(message));
    }

    return (
        <div className={s.dialogs}>
            <div>
                {props.state.dialogs
                    .map(el =>
                        <DialogItem name={el.name} id={el.id} key={el.id}/>
                    )}
            </div>
            <div>
                <div>{props.state.messages.map((el, i) => <Message message={el.message} key={i}/>)}</div>
                <div>
                    <textarea
                        onChange={onMessageTextUpdate}
                        value={props.state.newMessageText}
                        placeholder="Enter your message.."
                        id="" cols="30" rows="10"/>
                </div>
                <div>
                    <button onClick={onSend}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;