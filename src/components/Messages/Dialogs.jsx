import React from 'react';
import s from './Messages.module.scss'
import DialogItem from "./DialogItem";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                <DialogItem name="Kirill" id="1"/>
                <DialogItem name="Dima" id="2"/>
                <DialogItem name="Ksusha" id="3"/>
                <DialogItem name="Misha" id="4"/>
                <DialogItem name="Artyom" id="5"/>
                <DialogItem name="Vlad" id="6"/>
            </div>
            <div className={s.messages}></div>
        </div>
    );
};

export default Dialogs;