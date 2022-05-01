const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_VALUE = "UPDATE_NEW_POST_VALUE";

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const post = {
                id: state.posts.length,
                message: state.newPostField,
                likes: 0,
            };

            state.posts.push(post);
            state.newPostField = '';
            break;
        case UPDATE_NEW_POST_VALUE:
            state.newPostField = action.payload.newPostText;
            break;
        default:
            break;
    }


    return state;
};

export default profileReducer;
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostValueActionCreator = (text) => ({type: UPDATE_NEW_POST_VALUE, payload: {newPostText: text}});