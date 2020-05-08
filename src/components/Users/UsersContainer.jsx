import React from "react";
import {connect} from "react-redux";
import reduceUsers, {
    toFollow,
    toUpdateUsers, setFetching,
    changePage,
    setTotalUsersCount,
    toUnFollow, setButtonPressed
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../API/API";



class UsersAPIComponent extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setFetching( true );
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setFetching( false );
                this.props.toUpdateUsers(data.items);
                let num = data.totalCount/180;
                num = Math.ceil(num);
                this.props.setTotalUsersCount(num);
            });
        }
    }

    onChangePage = (pageNumber) => {
        this.props.setFetching( true );
        this.props.changePage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setFetching( false );
            this.props.toUpdateUsers(data.items);
        });
    }




    render() {

        let pagesCount = this.props.totalUsersCount/this.props.pageSize;
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
                    toFollow={this.props.toFollow}
                    toUnFollow={this.props.toUnFollow}
                    setButtonPressed={this.props.setButtonPressed}
                    isButtonPressed={this.props.isButtonPressed}
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
        isFetching: state.reduceUsers.isFetching,
        isButtonPressed: state.reduceUsers.isButtonPressed
    }
};

/*let mapDispatchToProps = ( dispatch ) => {
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
};*/

const UsersContainer = connect( mapStateToProps, { toFollow, toUnFollow, toUpdateUsers, changePage, setTotalUsersCount, setFetching, setButtonPressed } )(UsersAPIComponent);

export default UsersContainer