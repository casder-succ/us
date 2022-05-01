import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import navigationReducer from "./navigationReducer";

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
        Navigation: {
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
        this._state.DialogsPage = dialogsReducer(this.getState().DialogsPage, action);
        this._state.ProfilePage = profileReducer(this.getState().ProfilePage, action);
        this._state.Navigation = navigationReducer(this.getState().Navigation, action);

        this._callListener(this.getState());
    }

};


