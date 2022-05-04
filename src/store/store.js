import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import navigationReducer from "./navigationReducer";

export const store = {
    _state: {

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


