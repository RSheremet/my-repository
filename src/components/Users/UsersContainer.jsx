import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import reduceUsers, {followUser, setUsers, unFollowUser} from "../../Redux/users-reducer";

let mapStateToProps = ( state ) => {
    return {
        users: state.reduceUsers.users
    }
};

let mapDispatchToProps = ( dispatch ) => {
    return {
        toFollow: ( uId ) => {
            dispatch( followUser(uId) )
        },
        toUnFollow: ( uId ) => {
            dispatch( unFollowUser(uId) )
        },
        toUpdateUsers: ( allUsers ) => {
            dispatch( setUsers( allUsers) )
        }

    }
};

const UsersContainer = connect( mapStateToProps, mapDispatchToProps )(Users);

export default UsersContainer