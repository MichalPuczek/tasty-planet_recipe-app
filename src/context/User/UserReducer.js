import {
    CHANGE_FIELD,
    HANDLE_LOGIN_SUCCESS, HANDLE_LOGIN_ERROR,
    HANDLE_LOGOUT_SUCCESS,
    TOGGLE_LOGIN,
} from "../types";

export default (state, action) => {

    const { payload, type } = action;

    switch (type) {
        case CHANGE_FIELD:
            return {
                ...state,
                loginData: {
                    ...state.loginData,
                    ...payload,
                },
            };
        /*        case HANDLE_LOGIN:
                   return {
                       ...state,
                   }; */
        case HANDLE_LOGIN_SUCCESS:
            return {
                ...state,
                isLogged: true,
                loginData: {
                    email: "",
                    password: "",
                },
                error: "",
                user: payload,
                loggedMessage: `Bienvenu ${payload.username}`
            };
        case HANDLE_LOGIN_ERROR:
            return {
                ...state,
                error: payload,
                loginData: {
                    ...state.loginData,
                    password: "",
                },
                loggedMessage: "",
                user: {},
                isLogged: false,
            }
        case HANDLE_LOGOUT_SUCCESS:
            return {
                ...state,
                isLogged: false,
                user: {},
                loggedMessage: "",
            };
        case TOGGLE_LOGIN:
            return {
                ...state,
                toggleLoginField: !state.toggleLoginField,
            };
        default:
            return state;
    }
};