import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Messages/Dialogs";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./containers/DialogsContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="content container">
                <Navbar store={props.store}/>
                <Routes>
                    <Route path="/profile" element={
                        <Profile
                            store={props.store}
                        />}/>
                    <Route path="/messages" element={
                        <DialogsContainer
                            store={props.store}
                        />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
