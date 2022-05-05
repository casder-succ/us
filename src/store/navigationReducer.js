const initialState = {
    links: [
        {to: "/profile", name: "Profile"},
        {to: "/messages", name: "Messages"},
        {to: "/feed", name: "feed"},
    ],
};

const navigationReducer = (state = initialState, action) => {
    return state;
};

export default navigationReducer;