import React  from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingInProgress } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
// import * as axios from 'axios';
import { usersAPI } from '../../api/api';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.totalUsersCount).then(data => {
            this.props.setUsers(data.items);
            if (data.totalCount > 30) {
                this.props.setTotalUsersCount(10);
            } else {
                this.props.setTotalUsersCount(data.totalCount);
            }

            this.props.toggleIsFetching(false);
        });
    }
    componentDidUpdate() {

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);

            if (data.totalCount > 30) {
                this.props.setTotalUsersCount(10);
            } else {
                this.props.setTotalUsersCount(data.totalCount);
            }
            this.props.toggleIsFetching(false);
        });
    }
    render () {
        return <div>
            {this.props.isFetching ? <Preloader />  : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
            />
        </div>;
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount : state.usersPage.totalUsersCount,
        currentPage : state.usersPage.currentPage,
        isFetching : state.usersPage.isFetching,
        followingInProgress : state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingInProgress
})(UsersAPIComponent);
