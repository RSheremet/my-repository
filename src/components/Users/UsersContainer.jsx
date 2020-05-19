import React from "react";
import {connect} from "react-redux";
import reduceUsers, {
    toUpdateUsers,
    changePage,
    setButtonPressed, getUsersThunkCreator, newPageGetUsers, followThunkCreator
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getPageSize, getUsers, getUsersCount,
    getWhetherIsAuth,
    getWhetherIsButtonPressed,
    getWhetherIsFetching
} from "../../Redux/users-selectors";





class UsersAPIComponent extends React.Component {



    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
        }
        /*if (this.props.users.length === 0) { // П Р И М Е Р
            this.props.setFetching( true ); // П Р И М Е Р
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => { // П Р И М Е Р
                this.props.setFetching( false ); // П Р И М Е Р
                this.props.toUpdateUsers(data.items); // П Р И М Е Р
                let num = data.totalCount/180; // П Р И М Е Р
                num = Math.ceil(num); // П Р И М Е Р
                this.props.setTotalUsersCount(num); // П Р И М Е Р
            }); // П Р И М Е Р
        }*/ // П Р И М Е Р
    }

    onChangePage = (pageNumber) => {
        this.props.newPageGetUsers(pageNumber, this.props.pageSize )
    };




    render() {

        let pagesCount = this.props.totalUsersCount/this.props.pageSize;
        pagesCount = Math.ceil( pagesCount );

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <>
                { this.props.isFetching ? <Preloader /> : ""}

                <Users
                    pages={pages}
                    onChangePage={this.onChangePage}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    isFetching={this.props.isFetching}
                    setButtonPressed={this.props.setButtonPressed}
                    isButtonPressed={this.props.isButtonPressed}
                    followThunkCreator={this.props.followThunkCreator}
                    isAuth={this.props.isAuth}
                />
            </>
        )
    }

}

let mapStateToProps = ( state ) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getWhetherIsFetching(state),
        isButtonPressed: getWhetherIsButtonPressed(state),
        isAuth: getWhetherIsAuth(state)
    }
};

/*let mapDispatchToProps = ( dispatch ) => { // П Р И М Е Р
    return { // П Р И М Е Р
        toFollow: ( uId ) => { // П Р И М Е Р
            dispatch( followUser(uId) ) // П Р И М Е Р
        }, // П Р И М Е Р
        toUnFollow: ( uId ) => { // П Р И М Е Р
            dispatch( unFollowUser(uId) ) // П Р И М Е Р
        }, // П Р И М Е Р
        toUpdateUsers: ( allUsers ) => { // П Р И М Е Р
            dispatch( setUsers( allUsers) ) // П Р И М Е Р
        }, // П Р И М Е Р
        changePage: ( page ) => { // П Р И М Е Р
            dispatch( toChangePage(page) ) // П Р И М Е Р
        }, // П Р И М Е Р
        setTotalUsersCount: ( number ) => { // П Р И М Е Р
            dispatch( toChangeTotalUsersCount(number) ) // П Р И М Е Р
        }, // П Р И М Е Р
        setFetching: ( isFetching ) => { // П Р И М Е Р
            dispatch( toChangeFetching(isFetching) ) // П Р И М Е Р
        } // П Р И М Е Р

    } // П Р И М Е Р
};*/ // П Р И М Е Р



/*let UserRedirectComponent = AuthRedirectComponent(UsersAPIComponent); // П Р И М Е Р

const UsersContainer = connect( mapStateToProps, { // П Р И М Е Р
    toUpdateUsers, changePage, setButtonPressed, getUsersThunkCreator, // П Р И М Е Р
    newPageGetUsers, followThunkCreator, unFollowThunkCreator } )(UserRedirectComponent);*/ // П Р И М Е Р



export default compose(
    connect( mapStateToProps, {
        toUpdateUsers, changePage, setButtonPressed, getUsersThunkCreator,
        newPageGetUsers, followThunkCreator} )
)(UsersAPIComponent);