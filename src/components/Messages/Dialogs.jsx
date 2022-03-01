import React from 'react';
import s from './Dialogs.module.scss'
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
    const dialogItems = [
        {name: "Kirill", id: "1"},
        {name: "Dima", id: "2"},
        {name: "Ksusha", id: "3"},
        {name: "Misha", id: "4"},
        {name: "Artyom", id: "5"},
        {name: "Vlad", id: "6"},
    ]

    const messages = [
        {message: "hi"},
        {message: "how are you"},
        {message: "hello"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                {dialogItems
                    .map(el =>
                        <DialogItem name={el.name} id={el.id} key={el.id}/>
                    )}
            </div>
            <div className={s.messages}>
                {messages
                    .map((el, i) =>
                        <Message message={el.message} key={i}/>
                    )}
            </div>
        </div>
    );
};

export default Dialogs;