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
                <Navbar/>
                <Routes>
                    <Route path="/profile" element={ <Profile posts={props.posts}/> }/>
                    <Route path="/messages" element={ <Dialogs dialogs={props.dialogs} messages={props.messages}/> }/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
