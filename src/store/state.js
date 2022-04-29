const ADD_POST = "ADD_POST";
const SEND_MESSAGE = "SEND_MESSAGE";

const UPDATE_NEW_POST_VALUE = "UPDATE_NEW_POST_VALUE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

export const store = {
    _state: {
        ProfilePage: {
            posts: [
                {message: "hello", likes: 123},
                {message: "Hi guys no to war", likes: 20},
                {message: "was sup niga", likes: 23},
            ],
            newPostField: '',
        },
        DialogsPage: {
            messages: [
                {message: "hi"},
                {message: "how are you"},
                {message: "hello"},
            ],
            dialogs: [
                {name: "Kirill", id: "1"},
                {name: "Dima", id: "2"},
                {name: "Ksusha", id: "3"},
                {name: "Misha", id: "4"},
                {name: "Artyom", id: "5"},
                {name: "Vlad", id: "6"},
            ],
            newMessageText: '',
        },
        Sidebar: {
            links: [
                {to: "/profile", name: "Profile"},
                {to: "/messages", name: "Messages"},
                {to: "/feed", name: "feed"},
            ],
        }
    },

    _callListener() {
        console.log('this could be rerender');
    },

    subscribe(observer) {
        this._callListener = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                const post = {
                    id: this._state.ProfilePage.posts.length,
                    message: this._state.ProfilePage.newPostField,
                    likes: 0,
                };

                this._state.ProfilePage.posts.push(post);
                this._state.ProfilePage.newPostField = '';
                break;
            case UPDATE_NEW_POST_VALUE:
                this._state.ProfilePage.newPostField = action.payload.newPostText;
                break;
            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.DialogsPage.newMessageText = action.payload.newMessageText;
                break;
            case SEND_MESSAGE:
                const message = this._state.DialogsPage.newMessageText;
                this._state.DialogsPage.newMessageText = '';
                this._state.DialogsPage.messages[this._state.DialogsPage.messages.length] = {id: 6, message};
        }

        this._callListener(this.getState());
    }

};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostValueActionCreator = (text) => ({type: UPDATE_NEW_POST_VALUE, payload: {newPostText: text}})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, payload: {newMessageText: text,}})