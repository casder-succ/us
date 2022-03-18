import React from 'react';
import s from './NewPost.module.scss';

const NewPost = (props) => {
    const onChange = (newText) => {
        props.dispatch({
            type: "UPDATE_NEW_POST_VALUE",
            payload: {
                newPostText: newText
            }
        });
    };

    const onSubmit = (postText) => {
        props.dispatch({
            type: "ADD_POST",
            payload: {
                postText
            }
        })
    }

    return (
        <div className={s.new_post}>
            <textarea onChange={(event) => onChange(event.target.value)} value={props.newPostValue}/>
            <button onClick={() => onSubmit(props.newPostValue)}>Publish</button>
        </div>
    );
};

export default NewPost;