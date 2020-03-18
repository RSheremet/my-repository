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




const App = (props) => {

  return (
    <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navigation />
            <div className="app-wrapper-content">
                <Route path='/correspondense' render={ () => <Correspondense converstations={props.newState.correspondence.conversationData} messages={props.newState.correspondence.messagesData} />}/>
                <Route path='/profile' render={ () => <Profile postsData={props.newState.profile.posts} />} />
                <Route path='/news' render={ () => <News />} />
                <Route path='/music' render={ () => <Music />} />
                <Route path='/settings' render={ () => <Settings />} />
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
