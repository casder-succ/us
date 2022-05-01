import React from 'react';
import s from './NewPost.module.scss';
import {addPostActionCreator, updateNewPostValueActionCreator} from "../../../../store/profileReducer";

const NewPost = (props) => {
    const onChange = (newText) => {
        props.dispatch(updateNewPostValueActionCreator(newText));
    };

    const onSubmit = () => {
        props.dispatch(addPostActionCreator());
    };

    return (
        <div className={s.new_post}>
            <textarea
                value={props.newPostValue}
                onChange={(event) => onChange(event.target.value)}/>
            <button onClick={onSubmit}>Publish</button>
        </div>
    );
};

export default NewPost;