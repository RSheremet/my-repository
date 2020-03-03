import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import Correspondense from "./components/Correspondense/Correspondense";



const App = () => {
  return (
    <div className='app-wrapper'>
        <Header />
        <Navigation />
        {/*<Profile />*/}
        <div className="app-wrapper-content">
            <Correspondense/>
        </div>
    </div>
  );
}

export default App;
