const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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

const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: 
            let newMessage = {
                id: 6,
                user_id: 1,
                user_avatar: '/assets/img/user.png',
                message: state.newMessageText,
                likesCount: 0
            };

            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, newMessage]
                //spread with push newMessage
            };
        
        case UPDATE_NEW_MESSAGE_TEXT: 
            return {
                ...state,
                newMessageText: action.newText
            };
        
        default:
            return state;
    }

}

export const addMessageCreater = () => ({ type: ADD_MESSAGE });
export const onMessageChangeActionCreator = (text) => (
     {
        type : UPDATE_NEW_MESSAGE_TEXT, newText : text
     }
);

export default messagesReducer;