import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./containers/DialogsContainer";

const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <div className="content container">
                <Navbar/>
                <Routes>
                    <Route
                        path="/profile"
                        element={<Profile/>}
                    />

                    <Route
                        path="/messages"
                        element={<DialogsContainer/>}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
