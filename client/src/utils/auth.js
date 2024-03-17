import { setAuthTokens, clearAuthTokens, getAuthTokens } from 'react-auth-kit';
export const saveAuthToken = (token) => {
    setAuthTokens({ token });
};
export const removeAuthToken = () => {
    clearAuthTokens();
};
export const getAuthToken = () => {
    const { token } = getAuthTokens();
    return token;
};
