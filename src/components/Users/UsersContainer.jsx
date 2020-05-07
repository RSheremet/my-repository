import React from "react";
import {connect} from "react-redux";
import reduceUsers, {
    followUser,
    setUsers, toChangeFetching,
    toChangePage,
    toChangeTotalUsersCount,
    unFollowUser
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setFetching( true );
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setFetching( false );
                this.props.toUpdateUsers(response.data.items);
                let num = response.data.totalCount/180
                num = Math.ceil(num)
                this.props.setTotalUsersCount(num);
            });
        }
    }

    onChangePage = (pageNumber) => {
        this.props.setFetching( true );
        this.props.changePage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setFetching( false )
            this.props.toUpdateUsers(response.data.items);
        });
    }




    render() {

        let pagesCount = this.props.totalUsersCount/this.props.pageSize
        pagesCount = Math.ceil( pagesCount );

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <>
                { this.props.isFetching ? <Preloader /> : null }
                <Users
                    pages={pages}
                    onChangePage={this.onChangePage}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    isFetching={this.props.isFetching}
                />
            </>
        )
    }

}

let mapStateToProps = ( state ) => {
    return {
        users: state.reduceUsers.users,
        pageSize: state.reduceUsers.pageSize,
        totalUsersCount: state.reduceUsers.totalUsersCount,
        currentPage: state.reduceUsers.currentPage,
        isFetching: state.reduceUsers.isFetching
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
        },
        changePage: ( page ) => {
            dispatch( toChangePage(page) )
        },
        setTotalUsersCount: ( number ) => {
            dispatch( toChangeTotalUsersCount(number) )
        },
        setFetching: ( isFetching ) => {
            dispatch( toChangeFetching(isFetching) )
        }

    }
};

const UsersContainer = connect( mapStateToProps, mapDispatchToProps )(UsersAPIComponent);

export default UsersContainer