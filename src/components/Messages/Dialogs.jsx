import React from 'react';
import s from './Dialogs.module.scss'
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({onSend, onMessageTextUpdate, dialogs, messages, newMessageText}) => {
    return (
        <div className={s.dialogs}>
            <div>
                {
                    dialogs
                        .map(el => (
                            <DialogItem name={el.name} id={el.id} key={el.id}/>
                        ))
                }
            </div>
            <div>
                <div>
                    {messages.map((el, i) => <Message message={el.message} key={i}/>)}
                </div>
                <div>
                    <textarea
                        onChange={(e) => onMessageTextUpdate(e.target.value)}
                        value={newMessageText}
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