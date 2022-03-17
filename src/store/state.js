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
        },
        Sidebar: {
            links: [
                {to: "/profile", name: "Profile"},
                {to: "/messages", name: "Messages"},
                {to: "/feed", name: "feed"},
            ],
        }
    },

    addPost(postText) {
        const post = {
            id: this._state.ProfilePage.posts.length,
            message: postText,
            likes: 0,
        };

        this._state.ProfilePage.posts.push(post);
        this._state.ProfilePage.newPostField = '';
        this._callListener(this._state);
    },

    updateNewPostValue(newText) {
        this._state.ProfilePage.newPostField = newText;
        this._callListener(this._state);
    },

    subscribe(observer) {
        this._callListener = observer;
    },

    _callListener() {
        console.log('this could be rerender');
    },

    getState() {
        return this._state;
    }
};