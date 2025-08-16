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
import Lab_5 from './components/lab_5/Lab_5.js';
import DZ_3 from './components/dz_3/DZ_3.js';
import DZ_5 from './components/dz_5/DZ_5.js';
import DZ_6 from './components/dz_6/DZ_6.js';
import Count from './components/Count.js';
import Timer from './components/Timer.js';
import Lab_6 from './components/lab_6/Lab_6.js';
import UsersList from './components/UsersList.js';
import NewUsersList from './components/NewUsersList.js';
import WeatherForecast from './components/lab_7/WeatherForecast.js';
import CatFactsApp from './components/lab_8/CatFactsApp.js';

function App() {
  return (
    <div className="App">
      {/* 
      <Task1 />
      <Profile /> 
      <CounterApp /> 
      <ClockDate /> 
      <DZ_1 />
      <Welcome />
      <DZ_2 /> 
      <Lab_5 />
      <DZ_3 /> 
      <DZ_5 />
      <DZ_6 />
      <Count />
      <Timer />
      <Lab_6 />
      <UsersList />
      <NewUsersList />*/}
      {/* <WeatherForecast /> */}
      <CatFactsApp />
    </div>
  );
}

export default App;
