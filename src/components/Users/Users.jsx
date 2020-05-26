import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalUsersCount}`).then(response => {
            this.props.setUsers(response.data.items);

            if (response.data.totalCount > 30) {
                this.props.setTotalUsersCount(30);
            } else {
                this.props.setTotalUsersCount(response.data.totalCount);
            }
            
        });
    }
    componentDidUpdate() {

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.totalUsersCount}`).then(response => {
            this.props.setUsers(response.data.items);

            if (response.data.totalCount > 30) {
                this.props.setTotalUsersCount(30);
            } else {
                this.props.setTotalUsersCount(response.data.totalCount);
            }
        });
    }
    render () {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        console.log(pagesCount);
        let pages = [];

        for (let i=1; i < pagesCount; i++) {
            pages.push(i);
        } 

        return <div>
            {
                this.props.users.map(u => <div key={u.id} className={styles.userItem}>
                    <span>
                        <div>
                            <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : "https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif"} alt=""/>
                        </div>
                        <div>
                            {u.followed 
                                ? <button onClick={ ()=> {this.props.unfollow(u.id)} }>Unfollow</button>
                                : <button onClick={ ()=> {this.props.follow(u.id)} }>Follow</button> }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>
                                {"u.location.country"}
                            </div>
                            <div>
                                {"u.location.city"}
                            </div>
                        </span>
                    </span>
                </div>)
            }
            <div className={styles.pagination}>
                {
                    pages.map(p => {
                        return <span onClick={() => { this.onPageChanged(p) }} className={this.props.currentPage === p && styles.selectedPage}>{p}</span>
                    })
                }
            </div>
        </div>;
    }
}

export default Users;