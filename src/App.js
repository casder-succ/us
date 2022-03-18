import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Messages/Dialogs";
import {Routes, Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="content container">
                <Navbar state={props.state}/>
                <Routes>
                    <Route path="/profile" element={
                        <Profile
                            state={props.state.ProfilePage}
                            dispatch={props.dispatch}
                        />}/>
                    <Route path="/messages" element={
                        <Dialogs
                            state={props.state.DialogsPage}
                        />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
