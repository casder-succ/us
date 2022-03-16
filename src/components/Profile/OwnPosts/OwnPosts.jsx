import React from 'react';
import s from './OwnPosts.module.scss';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const OwnPosts = (props) => {
    return (
        <div className={s.posts}>
            <NewPost addPost={props.addPost} onChange={props.updateNewPostValue} newPostValue={props.state.newPostField}/>
            {props.state.posts
                .map((el, i) =>
                    <Post message={el.message} likes={el.likes} key={i}/>
                )}
        </div>

    );
};

export default OwnPosts;