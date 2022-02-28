import React from 'react';
import s from './NewPost.module.scss';

const NewPost = () => {
    return (
        <div className={s.new_post}>
            <textarea/>
            <button>Publish</button>
        </div>
    );
};

export default NewPost;