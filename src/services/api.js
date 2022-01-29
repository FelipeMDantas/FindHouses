import axios from 'axios';
import { API_URL, XRAPIDAPIHOST, XRAPIDAPIKEY} from '@env';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'x-rapidapi-host': XRAPIDAPIHOST,
        'x-rapidapi-key': XRAPIDAPIKEY,  
        useQueryString: true,    
    },
});

export default api;