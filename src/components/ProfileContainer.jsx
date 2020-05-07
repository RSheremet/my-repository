import React from 'react';
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Profile/MyPosts/MyPostsContainer";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../Redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let useriD = this.props.match.params.userID;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + useriD).then(response => {
            this.props.setUserProfile(response.data)
        });
    }

    render() {
        return (
            <div>
                <ProfileInfo { ...this.props } profile={this.props.profile} />
                <MyPostsContainer store={ this.props.store } />
            </div>
        )
    }


}

const mapStateToProps = ( state ) => {
    return {
        profile: state.profileRD.profile.singleProfile
    }
};

let withUrlRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlRouterProfileContainer);