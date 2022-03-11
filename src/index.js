import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import * as state from './store/state';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App posts={state.posts} messages={state.messages} dialogs={state.dialogItems}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
