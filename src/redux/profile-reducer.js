const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState ={
    postsData : [
        { id: 1, message: 'Hello', likesCount: 12},
        { id: 2, message: 'Props send test', likesCount: 33}
    ],
    newPostText: "Default"
}
const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };

            state.postsData.push(newPost);
            state.newPostText = '';
            
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default: 
            return state;
    }

    
}

export const addPostActionCreater = () => ({type: ADD_POST });
export const onPostChangeActionCreator = (text) => (
     {
        type : UPDATE_NEW_POST_TEXT, newText : text
     }
);

export default profileReducer;