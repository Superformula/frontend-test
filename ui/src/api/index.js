import axios from 'axios';

const apiURL = '/api';

export default {
    search: () => {
        return axios.get(apiURL, { params: { location: "Las Vegas" } });
    }
}