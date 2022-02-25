import React from 'react';
import s from './Profile.module.scss';
import OwnPosts from "./OwnPosts/OwnPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                ava + descr
            </div>
            <OwnPosts/>
        </div>
    );
};

export default Profile;