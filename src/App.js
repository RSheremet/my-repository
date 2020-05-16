import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendsList from "./components/FriendsList/FriendsList";
import CorrespondenseContainer from "./components/Correspondense/CorrespondenseContainer";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import appRD, {setInitializedThunkCreator} from "./Redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import {getUserProfileThunkCreatorr} from "./Redux/profile-reducer";




class App extends React.Component {

    componentDidMount() {
        this.props.setInitializedThunkCreator()
        this.props.getUserProfileThunkCreatorr( this.props.match.params.userID )
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => { // П Р И М Е Р
            let { id, login, email} = response.data.data; // П Р И М Е Р
            this.props.setAuthUserData(id, login, email); // П Р И М Е Р
        });*/ // П Р И М Е Р
    }

    render() {

        if (!this.props.setInitializedThunkCreator)
        { return <Preloader />}

        return (

            <div className='app-wrapper'>
                <HeaderContainer
                    store={this.props.store}
                />
                <Navigation
                    store={this.props.store}
                />
                <div className="app-wrapper-content">
                    <Route path='/correspondense'
                           render={ () =>
                               <CorrespondenseContainer
                                   store={ this.props.store }
                               />
                           }
                    />
                    <Route path='/profile/:userID?'
                           render={ () =>
                               <ProfileContainer
                                   // store={ this.props.store }
                               />
                           }
                    />
                    <Route path='/users'
                           render={ () =>
                               <UsersContainer
                                   store={ this.props.store }
                               />
                           }
                    />
                    <Route path='/login'
                           render={ () => <LoginContainer
                               store={ this.props.store }
                           />
                           }
                    />
                    <Route path='/news'
                           render={ () => <News
                               store={ this.props.store }
                           />
                           }
                    />
                    <Route path='/music'
                           render={ () => <Music
                               store={ this.props.store }
                           />
                           }
                    />
                    <Route path='/settings'
                           render={ () => <Settings
                               store={ this.props.store }
                           />
                           }
                    />
                    <Route path='/friendsList'
                           render={ () => <FriendsList
                               store={ this.props.store }
                           />
                           }
                    />
                </div>
            </div>
        );
    }


}

let mapStateToProps = ( state ) => {
    return {
        setInitializedThunkCreator: state.appRD.setInitializedThunkCreator
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {setInitializedThunkCreator, getUserProfileThunkCreatorr})
)(App);
