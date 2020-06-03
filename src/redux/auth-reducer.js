const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_USER_DATA:
            debugger
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        
        default: 
            return state;
    }
}

export const setAuthUserData = (usersId, email, login) => ({type: SET_USER_DATA, data: {usersId, email, login}});

export default authReducer;