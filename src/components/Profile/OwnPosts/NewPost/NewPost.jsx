import React from 'react';
import s from './NewPost.module.scss';

const NewPost = ({onChange, onSubmit, newPostValue}) => {
    return (
        <div className={s.new_post}>
            <textarea
                value={newPostValue}
                onChange={(event) => onChange(event.target.value)}
            />

            <button onClick={onSubmit}>Publish</button>
        </div>
    );
};

export default NewPost;