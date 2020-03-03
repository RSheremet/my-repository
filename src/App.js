import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";



const App = () => {
  return (
    <div className='app-wrapper'>
        <Header />
        <Navigation />
        <Profile />
    </div>
  );
}

export default App;
