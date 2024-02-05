import axios from 'axios';



export const apiService = axios.create({
    baseURL: 'http://127.0.0.1:8000',
});

export const login = async (username, password) => {
    try {
        await apiService.get('/sanctum/csrf-cookie').then(async () => {

            const response = await apiService.post('/api/v1/auth/login', {
                username,
                password,
            });
            return response.data;
        });
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

export const register = async (name, username, email, password, confirmPassword) => {
    axios.defaults.withCredentials = false;
    try {

        const response = await apiService.post('/api/v1/auth/register', {
            name,
            username,
            email,
            password,
            confirmPassword
        });
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};
