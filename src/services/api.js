import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tw-integracao.azurewebsites.net'
    // baseURL: 'https://1957-209-14-227-0.sa.ngrok.io/v1/'
});

export default api;