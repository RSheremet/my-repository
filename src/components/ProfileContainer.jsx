import React from 'react';
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Profile/MyPosts/MyPostsContainer";
import * as axios from "axios";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreatorr,
    getUsersStatusThunkCreator,
    sendUsersStatusThunkCreator,
    setUserProfile
} from "../Redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import CorrespondenseContainer from "./Correspondense/CorrespondenseContainer";
import {AuthRedirectComponent} from "./hoc/AuthRedirectComponent";
import {compose} from "redux";



class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfileThunkCreatorr( this.props.match.params.userID );
        let userId = this.props.match.params.userID;
        this.props.getUsersStatusThunkCreator( userId );
        /*let useriD = this.props.match.params.userID; // П Р И М Е Р
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + useriD).then(response => { // П Р И М Е Р
            this.props.setUserProfile(response.data) // П Р И М Е Р
        });*/ // П Р И М Е Р
    }

    render() {
        return (
            <div>
                <ProfileInfo { ...this.props }
                             profile={this.props.profile}
                             status={this.props.status}
                             sendUsersStatusThunkCreator={this.props.sendUsersStatusThunkCreator}
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
        status: state.profileRD.status
    }
};



export default compose(
    connect(mapStateToProps, {getUserProfileThunkCreatorr, sendUsersStatusThunkCreator, getUsersStatusThunkCreator}),
    withRouter,
    AuthRedirectComponent
)(ProfileContainer);