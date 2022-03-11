import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const posts = [
    {message: "hello", likes: 123},
    {message: "Hi guys no to war", likes: 20},
    {message: "was sup niga", likes: 23},
];
const dialogItems = [
    {name: "Kirill", id: "1"},
    {name: "Dima", id: "2"},
    {name: "Ksusha", id: "3"},
    {name: "Misha", id: "4"},
    {name: "Artyom", id: "5"},
    {name: "Vlad", id: "6"},
];

const messages = [
    {message: "hi"},
    {message: "how are you"},
    {message: "hello"},
];

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App posts={posts} messages={messages} dialogs={dialogItems}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
