import React from 'react';
import {addPostActionCreatorr} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux'
import {compose} from "redux";


let mapStateToProps = ( state ) => {

    return {

        postsData: state.profileRD.profile.posts,
        isAuth: state.authRD.isAuth

    }

}

export default compose(
    connect( mapStateToProps, {addPostActionCreatorr} )
)( MyPosts );