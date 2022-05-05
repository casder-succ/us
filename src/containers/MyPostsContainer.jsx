import OwnPosts from "../components/Profile/OwnPosts/OwnPosts";
import {addPostActionCreator, updateNewPostValueActionCreator} from "../store/profileReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.ProfilePage.posts,
        newPostField: state.ProfilePage.newPostField,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (newText) => {
            dispatch(updateNewPostValueActionCreator(newText));
        },

        onSubmit: () => {
            dispatch(addPostActionCreator());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OwnPosts);