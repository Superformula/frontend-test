import axios from 'axios';

const apiURL = 'https://frontend-test-sup.netlify.app/api';

export default {
    search: () => {
        return axios.get(apiURL, { params: { location: "Las Vegas" } });
    }
}