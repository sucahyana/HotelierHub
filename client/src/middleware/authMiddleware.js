import axios from "axios";

const checkAuthMiddleware = store => next => action => {
    const { type } = action;

    if (type === 'CHECK_AUTH') {
        const csrfCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('XSRF-TOKEN='));

        if (!csrfCookie) {
            console.log('Cookie tidak ditemukan');
            return;
        }
        axios.get('/sanctum/csrf-cookie')
            .then(response => {
                // CSRF cookie valid, atur token ke Redux state
                store.dispatch(setAuthToken(response.data));
            })
            .catch(error => {
                // CSRF cookie tidak valid, hapus token dari Redux state
                console.error('Error checking CSRF cookie:', error);
                store.dispatch(removeAuthToken());
            });
    }

    return next(action);
};
