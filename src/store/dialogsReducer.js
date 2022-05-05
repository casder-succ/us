const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.payload.newMessageText,
            };
        case SEND_MESSAGE:
            const message = state.newMessageText;

            return {
                ...state,
                messages: [
                    ...state.messages,
                    {message}
                ],
                newMessageText: '',
            };
        default:
            return state;
    }
};

export default dialogsReducer;
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, payload: {newMessageText: text,}});