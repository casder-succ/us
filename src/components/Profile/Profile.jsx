import React from 'react';
import s from './Profile.module.scss';
import OwnPosts from "./Posts/OwnPosts";

const Profile = () => {
    return (
        <main className={s.content}>
            <div>
                ava + descr
            </div>
            <OwnPosts/>
        </main>
    );
};

export default Profile;