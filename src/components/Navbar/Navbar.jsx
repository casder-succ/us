import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={({isActive}) => isActive ? s.active : ""}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/messages" className={({isActive}) => isActive ? s.active : ""}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="" className={({isActive}) => isActive ? s.active : ""}>Feed</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;