// src/actions/authActions.js
import { setAuthTokens, clearAuthTokens } from 'react-auth-kit';
import { saveAuthToken, removeAuthToken } from '../../utils/auth';

export const authStart = () => {
    return {
        type: 'AUTH_START'
    };
};

export const authSuccess = (token, expirationDate) => {
    saveAuthToken(token);
    return {
        type: 'AUTH_SUCCESS',
        token: token,
        expirationDate: expirationDate
    };
};

export const authFail = (error) => {
    return {
        type: 'AUTH_FAIL',
        error: error
    };
};

export const logout = () => {
    removeAuthToken();
    clearAuthTokens();
    return {
        type: 'AUTH_LOGOUT'
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime);
    };
};
