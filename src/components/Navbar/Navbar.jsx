import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

const Navbar = ({links}) => {
    return (
        <nav className={s.nav}>
            {links.map((link, i) => {
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