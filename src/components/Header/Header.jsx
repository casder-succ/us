import React from 'react';
import s from './Header.module.scss';

console.log(s)

const Header = () => {
    return (
        <div className={s.header}>
            <div className="container">
                <h1 className={s.header_title}>
                    US
                </h1>
            </div>
        </div>
    );
};

export default Header;