import api from './api';

export const getHousesCall = async () => {
    try {
        console.log('getHousesCall1111');
        const result = await api.get(
            '/properties/v2/list-for-rent?city=San%20Francisco&state_code=CA&limit=15&offset=0&sort=relevance',
    );
        console.log('getHousesCall2222');
        console.log({ result });
        return result.data;
    } catch (error) {
        console.log({ error });
        return error;
    }
};