import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendsList from "./components/FriendsList/FriendsList";
import CorrespondenseContainer from "./components/Correspondense/CorrespondenseContainer";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";




const App = (props) => {

  return (

        <div className='app-wrapper'>
            <HeaderContainer
                store={props.store}
            />
            <Navigation
                store={props.store}
            />
            <div className="app-wrapper-content">
                <Route path='/correspondense'
                       render={ () =>
                           <CorrespondenseContainer
                               store={ props.store }
                           />
                       }
                />
                <Route path='/profile/:userID'
                       render={ () =>
                           <ProfileContainer
                               store={ props.store }
                           />
                       }
                />
                <Route path='/users'
                       render={ () =>
                           <UsersContainer
                               store={ props.store }
                           />
                       }
                />
                <Route path='/login'
                       render={ () => <Login
                           store={ props.store }
                       />
                       }
                />
                <Route path='/news'
                       render={ () => <News
                           store={ props.store }
                       />
                       }
                />
                <Route path='/music'
                       render={ () => <Music
                           store={ props.store }
                       />
                       }
                />
                <Route path='/settings'
                       render={ () => <Settings
                           store={ props.store }
                       />
                       }
                />
                <Route path='/friendsList'
                       render={ () => <FriendsList
                           store={ props.store }
                       />
                       }
                />
            </div>
        </div>

  );
}

export default App;
