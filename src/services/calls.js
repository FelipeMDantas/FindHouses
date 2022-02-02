import api from './api';

export const getHousesCall = async () => {
    try {
        const result = await api.get(
            '/properties/v2/list-for-rent?city=San%20Francisco&state_code=CA&limit=15&offset=0&sort=relevance',
    );
        console.log({ result });
        return result.data;
    } catch (error) {
        console.log({ error });
        return error;
    }
};