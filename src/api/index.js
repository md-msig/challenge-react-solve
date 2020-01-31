import axios from 'axios';
import { API_ENDPOINT } from 'react-native-dotenv';

export default () => {
    const defaultOptions = {
        // baseURL: API_ENDPOINT,
        baseURL: 'http://localhost:8080',
        timeout: 15 * 1000,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    };

    // Create instance
    let instance = axios.create(defaultOptions);

    // Set the AUTH token for any request
    instance.interceptors.request.use(
        async config => {
            return config
        },
        error => {
            return Promise.reject(error)
        });

    return instance;
};
