import * as axios from 'axios';

export const getUsers  = (currentPage, totalUsersCount) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${totalUsersCount}`, {
        withCredentials: true
    })
    .then(response => {
        return response.data
    });
}