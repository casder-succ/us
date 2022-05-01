const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.payload.newMessageText;
            break;
        case SEND_MESSAGE:
            const message = state.newMessageText;
            state.newMessageText = '';
            state.messages[state.messages.length] = {id: 6, message};
            break;
        default:
            break;
    }

    return state;
};

export default dialogsReducer;
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, payload: {newMessageText: text,}});