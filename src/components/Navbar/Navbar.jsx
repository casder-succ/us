import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    const state = props.store.getState();

    return (
        <nav className={s.nav}>
            {
                state.Navigation.links.map((link, i) => {
                return (
                    <div className={s.item} key={i}>
                        <NavLink to={link.to} className={({isActive}) => isActive ? s.active : ""}>{link.name}</NavLink>
                    </div>
                );
            })}
            
        </nav>
    );
};

export default Navbar;