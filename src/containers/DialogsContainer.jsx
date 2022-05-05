import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../store/dialogsReducer";
import Dialogs from "../components/Messages/Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.DialogsPage.dialogs,
        messages: state.DialogsPage.messages,
        newMessageText: state.DialogsPage.newMessageText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSend: () => {
            dispatch(sendMessageActionCreator());
        },

        onMessageTextUpdate: (newText) => {
            dispatch(updateNewMessageTextActionCreator(newText));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);