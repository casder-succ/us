import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="content container">
                <Navbar/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
