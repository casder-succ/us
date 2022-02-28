import React from 'react';
import s from './Profile.module.scss';
import OwnPosts from "./OwnPosts/OwnPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <OwnPosts/>
        </div>
    );
};

export default Profile;