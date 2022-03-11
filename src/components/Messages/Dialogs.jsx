import React from 'react';
import s from './Dialogs.module.scss'
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div>
                {props.state.dialogs
                    .map(el =>
                        <DialogItem name={el.name} id={el.id} key={el.id}/>
                    )}
            </div>
            <div>
                {props.state.messages
                    .map((el, i) =>
                        <Message message={el.message} key={i}/>
                    )}
            </div>
        </div>
    );
};

export default Dialogs;