import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

//all data
let store = {
    _state : {
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
            ],
            newPostText: "Default"
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
                { id: 1, user_id: 1, user_avatar: '/assets/img/user.png', message: 'Hi'},
                { id: 2, user_id: 1, user_avatar: '/assets/img/user.png', message: 'Hi. user. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eveniet necessitatibus reiciendis tempore velit! Consequuntur delectus dolorum mollitia nesciunt soluta? Ad adipisci amet aperiam aspernatur distinctio eveniet, neque numquam repellat! '},
                { id: 3, user_id: 2, user_avatar: '/assets/img/user.png', message: 'Hi test'},
                { id: 4, user_id: 1, user_avatar: '/assets/img/user.png', message: 'Test'},
                { id: 5, user_id: 2, user_avatar: '/assets/img/user.png', message: 'Test hi'}
            ],
            newMessageText: 'Say, hi to your friend'
        }
    },
    _callSubscriber() {
        console.log('test')
    },
    getState() {
      return this._state;
    },
    subscribe(observer) {
        store._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        store._callSubscriber(this._state);
    }
}





export default store;
window.store = store;