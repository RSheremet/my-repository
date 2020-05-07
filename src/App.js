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




const App = (props) => {

  return (

        <div className='app-wrapper'>
            <Header />
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
                <Route path='/news'
                       render={ () => <News />
                       }
                />
                <Route path='/music'
                       render={ () => <Music />
                       }
                />
                <Route path='/settings'
                       render={ () => <Settings />
                       }
                />
                <Route path='/friendsList'
                       render={ () => <FriendsList
                           name={props.state.friendsList.friendsName}
                           age={props.state.friendsList.friendsAge}/>
                       }
                />
            </div>
        </div>

  );
}

export default App;
