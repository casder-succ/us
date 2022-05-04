import React from 'react';
import s from './Dialogs.module.scss'
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({onSend, onMessageTextUpdate, dialogs, messages, newMessageText}) => {
    return (
        <div className={s.dialogs}>
            <div>
                {dialogs.map(
                    el => (
                        <DialogItem name={el.name} id={el.id} key={el.id}/>
                    )
                )}
            </div>
            <div>
                <div>
                    {messages.map((el, i) => <Message message={el.message} key={i}/>)}
                </div>
                <div>
                    <textarea
                        value={newMessageText}
                        id="" cols="30" rows="10"
                        placeholder="Enter your message.."
                        onChange={(e) => onMessageTextUpdate(e.target.value)}

                    />
                </div>
                <div>
                    <button onClick={onSend}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;