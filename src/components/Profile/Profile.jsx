import React from 'react';
import s from './Profile.module.scss';
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <main className={s.content}>
            <div>
                ava + descr
            </div>
            <Posts/>
        </main>
    );
};

export default Profile;