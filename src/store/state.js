

export const state = {
    ProfilePage: {
        posts: [
            {message: "hello", likes: 123},
            {message: "Hi guys no to war", likes: 20},
            {message: "was sup niga", likes: 23},
        ]
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
        ]
    }
}