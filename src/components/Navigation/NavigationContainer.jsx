import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import NavigationWrapper from "./NavigationWrapper";
import {toCheckInitializationForProfile} from "../../Redux/auth-reducer";
import {withRouter} from "react-router-dom";
import {getSingleProfile} from "../../Redux/profile-selectors";
import {getIsInitialized, getLogin, getUserId} from "../../Redux/auth-selectors";


class NavigationContainer extends React.Component {

    state = {
      points: [
          { id: 1, link: "/profile/7398", name: "Профиль" },
          { id: 2, link: "/users", name: "Пользователи" },
          { id: 3, link: "/news", name: "Новости" },
          { id: 4, link: "/music", name: "Музыка" },
          { id: 5, link: "/settings", name: "Настройки" },
          { id: 6, link: "/friendsList", name: "Список друзей" }
      ],
      chosenPoint: 1
    };

    changeChosenPoint = ( id ) => {
        this.setState({
            chosenPoint: id
        })
    };

    render() {

        return (
            <NavigationWrapper
                profile={this.props.profile}
                isInitialized={this.props.isInitialized}
                login={this.props.login}
                points={this.state.points}
                chosenPoint={this.state.chosenPoint}
                changeChosenPoint={this.changeChosenPoint}
            />
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        profile: getSingleProfile(state),
        isInitialized: getIsInitialized(state),
        userId: getUserId(state),
        login: getLogin(state)
    }
};

export default compose(
    connect(mapStateToProps, {toCheckInitializationForProfile}),
    withRouter
)(NavigationContainer);