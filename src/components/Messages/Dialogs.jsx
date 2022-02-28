import React from 'react';
import s from './Messages.module.scss'
import {NavLink} from "react-router-dom";

const Messages = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                <div className={s.item}>
                    <NavLink to="1">Dima</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="2">Ksusha</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="3">Artyom</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="4">Vadim</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="5">Vlad</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="6">Kirill</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Messages;