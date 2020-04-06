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
import FriendsList from "./components/FriendsList/FriendsList";




const App = (props) => {

    debugger

  return (
    <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navigation />
            <div className="app-wrapper-content">
                <Route path='/correspondense'
                       render={ () => <Correspondense
                           converstations={props.newState.correspondence.conversationData}
                           messages={props.newState.correspondence.messagesData}
                           correspondenseChange={props.newState.correspondenseChange.changed}
                           dispatch={props.dispatch} />}
                />
                <Route path='/profile'
                       render={ () => <Profile postsData={props.newState.profile.posts}
                                               valdef={props.newState.valdef.valueDefault}
                                               dispatch={props.dispatch} />}
                />
                <Route path='/news'
                       render={ () => <News />}
                />
                <Route path='/music'
                       render={ () => <Music />}
                />
                <Route path='/settings'
                       render={ () => <Settings />}
                />
                <Route path='/friendsList'
                       render={ () => <FriendsList
                           name={props.newState.friendsList.friendsName}
                           age={props.newState.friendsList.friendsAge}/>}
                />
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
