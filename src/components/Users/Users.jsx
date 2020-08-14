import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './users.module.css';
import * as axios from 'axios';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // console.log(pagesCount);
    let pages = [];

    for (let i=1; i < pagesCount; i++) {
        pages.push(i);
    } 

    return <div>
        {
            props.users.map(u => <div id={u.id} key={u.id} className={styles.userItem}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : "https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif"} alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed 
                            ? <button onClick={ ()=> {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/unfollow/` + u.id, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '23914faa-28f7-4a00-953d-4b655b9a61b4'
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                });

                            } }>Unfollow</button>
                            : <button onClick={ ()=> {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/` + u.id, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '23914faa-28f7-4a00-953d-4b655b9a61b4'
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                });
                                

                                } }>Follow</button> }
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
                    return <span id={p.id} key={p} onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p ? styles.selectedPage : ''}>{p}</span>
                })
            }
        </div>
    </div>;
}

export default Users;