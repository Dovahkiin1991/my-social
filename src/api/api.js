import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
      'API-KEY': '23914faa-28f7-4a00-953d-4b655b9a61b4'
  }
});

export const usersAPI = {
  getUsers(currentPage, totalUsersCount) {
      return instance.get(`users?page=${currentPage}&count=${totalUsersCount}`)
      .then(response => {
          return response.data
      });
  }
}

// export const getUsers2  = (currentPage, totalUsersCount) => {
//     return axios.get(baseUrl + `follow?page=${currentPage}&count=${totalUsersCount}`, {
//         withCredentials: true
//     })
//     .then(response => {
//         return response.data
//     });
// }
