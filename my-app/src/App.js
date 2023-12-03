import React from 'react';
import logo from './logo.svg';
import './App.css';
import incrementView from './index.js';
function increment(){
  incrementView();
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/dogd"
          // target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick="increment()">
        Press Me!!!!
        </button>
        <ul>
          <li>list element 1</li>
          <li>the second element in the list</li>
          <li>o what theres 3 elements now</li>
          <li>dang 4 elements is alot of them</li>
          <li>the fifth and final element whaaaaaaat</li>
        </ul>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </header>
    </div>
  );
}

export default App;
