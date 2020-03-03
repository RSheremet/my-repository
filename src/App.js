import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import Correspondense from "./components/Correspondense/Correspondense";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";




const App = () => {
  return (
    <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navigation />
            <div className="app-wrapper-content">
                <Route path='/correspondense' component={Correspondense}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
