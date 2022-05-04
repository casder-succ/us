import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./containers/DialogsContainer";

const App = ({store}) => {
    const state = store.getState();

    return (
        <div className="app-wrapper">
            <Header/>
            <div className="content container">
                <Navbar links={state.Navigation.links}/>
                <Routes>
                    <Route path="/profile" element={
                        <Profile
                            store={store}
                        />}/>
                    <Route path="/messages" element={
                        <DialogsContainer
                            store={store}
                        />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
