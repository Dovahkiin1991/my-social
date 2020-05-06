let initialState = {
    title : 'Friends',
    friends : [
        { id: 1, name: 'Name 1', user_avatar: '/assets/img/user.png'},
        { id: 2, name: 'Name 2', user_avatar: '/assets/img/user.png'},
        { id: 3, name: 'Name 3', user_avatar: '/assets/img/user.png'},
        { id: 4, name: 'Name 4', user_avatar: '/assets/img/user.png'},
        { id: 5, name: 'Name 5', user_avatar: '/assets/img/user.png'}
    ]
}

const sidebarReducer = (state = initialState, action) => {
    
    return state;
}

export default sidebarReducer;