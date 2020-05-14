import React from 'react';
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {id:1, followed: true, photoUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif', fullName: 'Dmitry K.', status: "It's my first status", location: {city:'Poltava', country:'Ukraine'}},
                {id:2, followed: false, photoUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif', fullName: 'Sasha K.', status: "Hey people from Ukraine", location: {city:'New York', country:'USA'}},
                {id:3, followed: true, photoUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif', fullName: 'Olga K.', status: "It's my first status", location: {city:'Kyiv', country:'Ukraine'}},
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id} className={styles.userItem}>
                <span>
                    <div>
                        <img className={styles.userPhoto} src={u.photoUrl} alt=""/>
                    </div>
                    <div>
                        {u.followed 
                            ? <button onClick={ ()=> {props.unfollow(u.id)} }>Unfollow</button>
                            : <button onClick={ ()=> {props.follow(u.id)} }>Follow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>
                            {u.location.country}
                        </div>
                        <div>
                            {u.location.city}
                        </div>
                    </span>
                </span>
            </div>)
        }
    </div>;
}

export default Users;