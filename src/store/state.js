let rerender = () => {
    console.log('this could be rerender');
};

const state = {
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
};

export const addPost = (postText) => {
    const post = {
        id: state.ProfilePage.posts.length,
        message: postText,
        likes: 0,
    };

    state.ProfilePage.posts.push(post);
    state.ProfilePage.newPostField = '';
    rerender(state);
};

export const updateNewPostValue = (newText) => {
    state.ProfilePage.newPostField = newText;
    rerender(state);
};

export const subscribe = (observer) => {
    rerender = observer;
};

export {state};