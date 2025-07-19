import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome.js';
import Task1 from './components/lab_1/Task1.js';
import Profile from './components/lab_1/Profile.js';
import CounterApp from './components/lab_3/CounterApp.js';
import React from 'react';
import Clock from './components/dz_1/Clock.js';
import ClockDate from './components/lab_4/ClockDate.js';
import DZ_1 from './components/dz_1/DZ_1.js';
import DZ_2 from './components/dz_2/DZ_2.js';

function App() {
  return (
    <div className="App">
      {/* 
      <Task1 />
      <Profile /> 
      <CounterApp /> 
      <Welcome />
      <ClockDate /> 
      <DZ_1 />*/}
      <DZ_2 />
    </div>
  );
}

export default App;
