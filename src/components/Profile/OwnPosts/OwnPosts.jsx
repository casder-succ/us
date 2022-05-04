import React from 'react';
import s from './OwnPosts.module.scss';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const OwnPosts = ({onSubmit, onChange, posts, newPostField}) => {
    return (
        <div className={s.posts}>
            <NewPost
                onChange={onChange}
                onSubmit={onSubmit}
                newPostValue={newPostField}
            />

            {
                posts
                    .map((el, i) => (
                        <Post message={el.message} likes={el.likes} key={i}/>
                    ))
            }
        </div>

    );
};

export default OwnPosts;