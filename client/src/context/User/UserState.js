import React, { useReducer } from "react";
import axios from 'axios';

import UserContext from './UserContext';
import UserReducer from './UserReducer';

import {
    CHANGE_FIELD,
    HANDLE_LOGIN_SUCCESS, HANDLE_LOGIN_ERROR,
    HANDLE_LOGOUT_SUCCESS,
    TOGGLE_LOGIN,
} from '../types';

const UserState = (props) => {
    let initialState = {
        isLogged: false,
        loginData: {
            email: "",
            password: "",
        },
        loggedMessage: "Bienvenu",
        error: "",
        user: {},
        toggleLoginField: false,
    };

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const changeField = (value) => {
        dispatch({ type: CHANGE_FIELD, payload: value })
    };

    const handleLogin = () => {
        axios({
            method: 'post',
            url: 'http://localhost:3001/login',
            data: state.loginData,
            withCredentials: true
        })
            .then((res) => {
                const { info } = res.data;
                dispatch({ type: HANDLE_LOGIN_SUCCESS, payload: info });
            })
            .catch((err) => {
                dispatch({ type: HANDLE_LOGIN_ERROR, payload: `Impossible de connecter cet utilisateur` });
            })
        /*   dispatch({ type: HANDLE_LOGIN }); */
    };

    const handleLogout = () => {
        axios({
            method: 'post',
            url: 'http://localhost:3001/logout',
            withCredentials: true
        })
            .then((res) => {
                dispatch({ type: HANDLE_LOGOUT_SUCCESS });
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const checkAuth = () => {
        axios({
            method: 'post',
            url: 'http://localhost:3001/isLogged',
            withCredentials: true
        })
            .then((res) => {
                if (res.data.logged) {
                    dispatch({ type: HANDLE_LOGIN_SUCCESS, payload: res.data.info });
                }
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const toggleLogin = () => {
        dispatch({ type: TOGGLE_LOGIN });
    };

    return (
        <UserContext.Provider
            value={{
                isLogged: state.isLogged,
                loginData: state.loginData,
                loggedMessage: state.loggedMessage,
                error: "",
                user: {},
                toggleLoginField: state.toggleLoginField,
                changeField,
                handleLogin,
                handleLogout,
                checkAuth,
                toggleLogin,
            }}
        >
            {props.children}
        </UserContext.Provider >
    );
};

export default UserState;