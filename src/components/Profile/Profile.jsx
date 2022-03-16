import React from 'react';
import s from './Profile.module.scss';
import OwnPosts from "./OwnPosts/OwnPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <OwnPosts addPost={props.addPost} updateNewPostValue={props.updateNewPostValue} state={props.state}/>
        </div>
    );
};

export default Profile;