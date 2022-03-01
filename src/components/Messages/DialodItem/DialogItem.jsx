import React from 'react';
import s from './Messages.module.scss';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={props.id}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;