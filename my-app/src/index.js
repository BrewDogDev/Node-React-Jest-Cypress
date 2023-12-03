import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './Counter';
import BrewDogsComponent from './BrewDogsComponent';
import * as serviceWorker from './serviceWorker';

let view = 0;
function renderCurrentView(){
    switch(view){
        case 0: ReactDOM.render(<App />, document.getElementById('root'));break;
        case 1: ReactDOM.render(<Counter />, document.getElementById('root'));break;
        case 2: ReactDOM.render(<BrewDogsComponent />, document.getElementById('root'));break;
        default: ReactDOM.render(<App />, document.getElementById('root'));break;
    }
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export default function incrementView(){
    view++;
    renderCurrentView();
}
renderCurrentView();
