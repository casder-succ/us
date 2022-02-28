import React from 'react';
import s from './OwnPosts.module.scss';
import Post from "./Post/Post";

const OwnPosts = () => {
    return (
        <div>
            new post
            <Post message = 'Hello' likes='123'/>
            <Post message = 'Hi guys no to war' likes='20'/>
        </div>

    );
};

export default OwnPosts;