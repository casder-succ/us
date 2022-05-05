const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_VALUE = "UPDATE_NEW_POST_VALUE";

const initialState = {
    posts: [
        {message: "hello", likes: 123},
        {message: "Hi guys no to war", likes: 20},
        {message: "was sup niga", likes: 23},
    ],
    newPostField: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const post = {
                id: state.posts.length,
                message: state.newPostField,
                likes: 0,
            };

            return {
                ...state,
                posts: [
                    ...state.posts,
                    post,
                ],
                newPostField: ''
            };
        case UPDATE_NEW_POST_VALUE:
            return {
                ...state,
                newPostField: action.payload.newPostField
            };
        default:
            return state;
    }
};

export default profileReducer;
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostValueActionCreator = (text) => ({type: UPDATE_NEW_POST_VALUE, payload: {newPostText: text}});