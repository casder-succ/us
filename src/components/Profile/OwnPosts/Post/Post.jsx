import React from 'react';
import s from './Post.module.scss';

const Post = () => {
    return (
        <div className={s.post}>
            <div className={s.post_header}>
                <a href="" className={s.post_imgContainer}>
                    <img
                        src="https://steamuserimages-a.akamaihd.net/ugc/1698402776116313451/993A8BB58E84D0960A398BF731A257A4DB09F261/"
                        alt=""
                        className={s.post_img}
                    />
                </a>
                <div className={s.post_headerInfo}>
                    <h5 className={s.post_author}>Name</h5>
                    <p className={s.post_time}>26.02.2022</p>
                </div>
            </div>

            <div className={s.post_content}>
                test
            </div>
        </div>
    );
};

export default Post;