import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//all data
let dialogsData = [
    { id: 1, name: 'Name 1'},
    { id: 2, name: 'Name 2'},
    { id: 3, name: 'Name 3'},
    { id: 4, name: 'Name 4'},
    { id: 5, name: 'Name 5'}
];

let messagesData = [
    { id: 1, message: 'Hi'},
    { id: 2, message: 'Hi. user'},
    { id: 3, message: 'Hi test'},
    { id: 4, message: 'Test'},
    { id: 5, message: 'Test hi'}
];

let postsData = [
    { id: 1, message: 'Hello', likesCount: 12},
    { id: 2, message: 'Props send test', likesCount: 33}
];

ReactDOM.render(<App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
