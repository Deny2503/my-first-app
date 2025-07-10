import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome.js';
import Task1 from './components/Task1.js';
import Profile from './components/Profile.js';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Task1 />
      <Welcome />
      <Profile />
    </div>
  );
}

export default App;
