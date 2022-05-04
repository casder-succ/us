import React from 'react';
import OwnPosts from "../components/Profile/OwnPosts/OwnPosts";
import {addPostActionCreator, updateNewPostValueActionCreator} from "../store/profileReducer";

const MyPostsContainer = ({ store }) => {
    const state = store.getState();

    const onChange = (newText) => {
        store.dispatch(updateNewPostValueActionCreator(newText));
    };

    const onSubmit = () => {
        store.dispatch(addPostActionCreator());
    };

    return (
        <OwnPosts
            onChange={onChange}
            onSubmit={onSubmit}
            posts={state.ProfilePage.posts}
            newPostField={state.ProfilePage.newPostField}
        />
    );
};

export default MyPostsContainer;