//all data
let state = {
    sidebar : {
        title : 'Friends',
        friends : [
            { id: 1, name: 'Name 1', user_avatar: '/assets/img/user.png'},
            { id: 2, name: 'Name 2', user_avatar: '/assets/img/user.png'},
            { id: 3, name: 'Name 3', user_avatar: '/assets/img/user.png'},
            { id: 4, name: 'Name 4', user_avatar: '/assets/img/user.png'},
            { id: 5, name: 'Name 5', user_avatar: '/assets/img/user.png'}
        ]
    },
    profilePage : {
        postsData : [
            { id: 1, message: 'Hello', likesCount: 12},
            { id: 2, message: 'Props send test', likesCount: 33}
        ]
    },
    messagesPage : {
        dialogsData : [
            { id: 1, name: 'Name 1', user_avatar: '/assets/img/user.png'},
            { id: 2, name: 'Name 2', user_avatar: '/assets/img/user.png'},
            { id: 3, name: 'Name 3', user_avatar: '/assets/img/user.png'},
            { id: 4, name: 'Name 4', user_avatar: '/assets/img/user.png'},
            { id: 5, name: 'Name 5', user_avatar: '/assets/img/user.png'}
        ],
        messagesData : [
            { id: 1, message: 'Hi'},
            { id: 2, message: 'Hi. user'},
            { id: 3, message: 'Hi test'},
            { id: 4, message: 'Test'},
            { id: 5, message: 'Test hi'}
        ]
    }
}

export default state;