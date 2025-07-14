import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome.js';
import Task1 from './components/lab_1/Task1.js';
import Profile from './components/lab_1/Profile.js';
import CounterApp from './components/lab_3/CounterApp.js';
import React from 'react';

function App() {
  return (
    <div className="App">
      {/* <Task1 />
      <Profile /> 
      <Welcome />*/}
      <CounterApp />
    </div>
  );
}

export default App;
