import React from 'react';
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Profile/MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreatorr,
    getUsersStatusThunkCreator, sendUsersStatusThunkCreator
} from "../Redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {AuthRedirectComponent} from "./hoc/AuthRedirectComponent";
import {compose} from "redux";
import {setAuthUserDataThunkCreator, toChangePhoto, toCheckInitializationForProfile} from "../Redux/auth-reducer";



class ProfileContainer extends React.Component {

    toReloadComponent = () => {
        let userId = this.props.match.params.userID;
        if (userId === ":userID") {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }


        this.props.toCheckInitializationForProfile( userId );
        this.props.getUsersStatusThunkCreator( userId );


        /*let useriD = this.props.match.params.userID; // П Р И М Е Р
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + useriD).then(response => { // П Р И М Е Р
            this.props.setUserProfile(response.data) // П Р И М Е Р
        });*/ // П Р И М Е Р
    }

    componentDidMount() {
        this.toReloadComponent()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userID !== prevProps.match.params.userID) // если меняется айдишник пользователя то следует обновить страницу в противном случае - нет
        this.toReloadComponent()                                              // если старые айдишник равен новому (при переходе со страницы пользователей в профайл) то следует обновить
    }

    someId = this.props.match.params.userID;



    render() {

        return (
            <div>
                <ProfileInfo { ...this.props }
                             profile={this.props.profile}
                             status={this.props.status}
                             sendUsersStatusThunkCreator={this.props.sendUsersStatusThunkCreator}
                             someId={this.someId}
                             userId={this.props.userId}
                             toChangePhoto={this.props.toChangePhoto}
                             isInitialized={this.props.isInitialized}
                />
                <MyPostsContainer store={ this.props.store } />
            </div>
        )
    }


}

const mapStateToProps = ( state ) => {
    return {
        profile: state.profileRD.profile.singleProfile,
        isAuth: state.authRD.isAuth,
        status: state.profileRD.status,
        userId: state.authRD.userId,
        isInitialized: state.authRD.isInitialized
    }
};



export default compose(
    connect(mapStateToProps, {getUserProfileThunkCreatorr, getUsersStatusThunkCreator, setAuthUserDataThunkCreator,
        sendUsersStatusThunkCreator, toChangePhoto, toCheckInitializationForProfile}),
    withRouter,
    AuthRedirectComponent
)(ProfileContainer);