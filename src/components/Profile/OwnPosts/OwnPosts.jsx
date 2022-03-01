import React from 'react';
import s from './OwnPosts.module.scss';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const OwnPosts = () => {
    const posts = [
        {message: "hello", likes: 123},
        {message: "Hi guys no to war", likes: 20},
        {message: "was sup niga", likes: 23},
    ]

    return (
        <div className={s.posts}>
            <NewPost/>
            {posts
                .map((el, i) =>
                    <Post message={el.message} likes={el.likes} key={i}/>
                )}
        </div>

    );
};

export default OwnPosts;