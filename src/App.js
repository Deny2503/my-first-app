import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

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
import DZ_7 from './components/dz_7/DZ_7.js';
import WeatherApp from './components/dz_8/WeatherApp.js';
import Hello from './components/Hello.js';
import ArtistRoutes from "./components/lab_9/ArtistRoutes";
import WondersRoutes from "./components/lab_9/WondersRoutes";

export default function App() {
  return (
    <>
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
      <NewUsersList />
      <CatFactsApp />
      <DZ_7 />
      <WeatherForecast />
      <Hello />
      <WeatherApp /> */}


      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artist/*" element={<ArtistRoutes />} />
            <Route path="/wonders/*" element={<WondersRoutes />} />
          </Routes>
        </main>
      </Router>


    </>
  );
}

function Home() {
  return (
    <div className="home">
      <h2>👋 Ласкаво просимо!</h2>
      <p> Цей додаток допоможе тобі познайомитися з біографією великого митця Леонардо да Вінчі та дізнатися більше про Сім чудес Стародавнього світу. </p>
      <ul>
        <li><Link to="/artist">🎨 Відомий художник</Link></li>
        <li><Link to="/wonders">🏛 Сім чудес Стародавнього світу</Link></li>
      </ul>
    </div>
  );
}
