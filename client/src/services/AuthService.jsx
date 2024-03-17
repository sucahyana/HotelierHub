import axios from 'axios';
import { getAuthToken } from '../utils/auth'

const apiService = axios.create({
    baseURL: 'http://127.0.0.1:8000',
});
apiService.interceptors.request.use(async (config) => {
    const token = getAuthToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export const login = async (username, password) => {
    try {
        await apiService.get('/sanctum/csrf-cookie');

        const response = await apiService.post('/api/v1/auth/login', {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

export const register = async (name, username, email, password, confirmPassword) => {
    try {
        // Mengganti pengaturan withCredentials
        axios.defaults.withCredentials = false;

        const response = await apiService.post('/api/v1/auth/register', {
            name,
            username,
            email,
            password,
            confirmPassword,
        });
        return response.data;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
};
