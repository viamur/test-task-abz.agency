import axios from 'axios';

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

// users?page=1&count=5

/* =============GET ALL USERS============== */
export const getUsers = async ({ page }) => {
    try {
        const response = await axios.get(`users?page=${page}&count=6`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

/* =============GET ALL POSITIONS============== */
export const getPositions = async () => {
    try {
        const response = await axios.get(`positions`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

/* =============GET TOKEN============== */
export const getToken = async () => {
    try {
        const response = await axios.get(`token`)
        axios.defaults.headers.common.Token = response.data.token;
        return response.data.token;
    } catch (error) {
        console.log(error);
    }
}

/* =============POST USER============== */
export const postUser = async (data) => {
    try {
        const response = await axios.post(`users`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

/* =============GET USER ID============== */
export const getUserID = async (id) => {
    const response = await axios.get(`users/${id}`);
    return response.data;
}