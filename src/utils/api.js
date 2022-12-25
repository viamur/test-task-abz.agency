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