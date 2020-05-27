import React, {Suspense} from 'react';
import style from './App.module.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendsList from "./components/FriendsList/FriendsList";
import CorrespondenseContainer from "./components/Correspondense/CorrespondenseContainer";
import {Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import appRD, {setInitializedThunkCreator} from "./Redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from './Redux/redux-store';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {LazyLoadHocComponent} from "./components/hoc/LazyLoadHoc";
import NavigationContainer from "./components/Navigation/NavigationContainer";

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer')); // Lazy-loaded
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')); // Lazy-loadedss







class App extends React.Component {

    componentDidMount() {
        this.props.setInitializedThunkCreator()
    }

    render() {

        if (!this.props.isInitialized) {
            return <Preloader />
        }

        return (

            <body>

            <HeaderContainer
                store={this.props.store}
            />
            <div className={style.container}>
                <NavigationContainer
                    store={this.props.store}
                />
                <Route path='/correspondense'
                       render={ () =>
                           <CorrespondenseContainer
                               store={ this.props.store }
                           />
                       }
                />
                <Route path='/profile/:userID?'
                       render={ LazyLoadHocComponent(ProfileContainer) }/>

                <Route path='/users'
                       render={ LazyLoadHocComponent(UsersContainer) }/>

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

            </body>
        );
    }


}

let mapStateToProps = ( state ) => {
    return {
        isInitialized: state.appRD.isInitialized
    }
};

export const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {setInitializedThunkCreator})
)(App);

let SocialNetworkApp = (props) => {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store} >
                <AppContainer />
            </Provider>
        </HashRouter>
    )
};

export default SocialNetworkApp;
