import React from 'react';
import s from './OwnPosts.module.scss';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const OwnPosts = () => {
    return (
        <div className={s.posts}>
            <NewPost/>
            <Post message = 'Hello' likes='123'/>
            <Post message = 'Hi guys no to war' likes='20'/>
        </div>

    );
};

export default OwnPosts;