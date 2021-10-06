const axios = require('axios');

export const login = async (username, password) => {
    return axios({
        method: 'post',
        url: 'http://localhost:3001/login',
        data: {
            username,
            password
        }
    });
}