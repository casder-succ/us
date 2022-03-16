import React from 'react';
import s from './NewPost.module.scss';

const NewPost = (props) => {
    return (
        <div className={s.new_post}>
            <textarea onChange={(event) => props.onChange(event.target.value)} value={props.newPostValue}/>
            <button onClick={() => props.addPost(props.newPostValue)}>Publish</button>
        </div>
    );
};

export default NewPost;