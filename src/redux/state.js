const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';

            store._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT ) {
            this._state.profilePage.newPostText = action.newText;

            store._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE ) {
            let newMessage = {
                id: 6,
                user_id: 1,
                user_avatar: '/assets/img/user.png',
                message: this._state.messagesPage.newMessageText,
                likesCount: 0
            };

            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.newMessageText = '';

            store._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newText;

            store._callSubscriber(this._state);
        }

    }
}

export const addMessageCreater = () => ({ type: ADD_MESSAGE });
export const onMessageChangeActionCreator = (text) => (
     {
        type : UPDATE_NEW_MESSAGE_TEXT, newText : text
     }
);
export const addPostActionCreater = () => ({type: ADD_POST });
export const onPostChangeActionCreator = (text) => (
     {
        type : UPDATE_NEW_POST_TEXT, newText : text
     }
);


export default store;
window.store = store;