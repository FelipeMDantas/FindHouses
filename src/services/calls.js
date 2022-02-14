import api from './api';

export const getHousesCall = async (query) => {
    var baseQuery = '/properties/v2/list-for-rent?city=Miami&state_code=FL&limit=15&offset=0&sort=relevance';

    if(query) {
        const { sizeMin, sizeMax, priceMin, priceMax, bedsMin, bathsMin} = query;

        if (sizeMin) {
            baseQuery += `&sqft_min=${sizeMin}`
        }
    
        if (sizeMax) {
            baseQuery += `&sqft_max=${sizeMax}`
        }
    
        if (priceMin) {
            baseQuery += `&price_min=${priceMin}`
        }
    
        if (priceMax) {
            baseQuery += `&price_max=${priceMax}`
        }
    
        if (bedsMin) {
            baseQuery += `&beds_min=${bedsMin}`
        }
    
        if (bathsMin) {
            baseQuery += `&baths_min=${bathsMin}`
        }    
    }

    try {
        const result = await api.get(baseQuery);
        console.log({ result });
        return result.data;
    } catch (error) {
        return error;
    }
};

export const getHouseDetail = async property_id => {
    try {
        const result = await api.get(
            `/properties/v2/detail?property_id=${property_id}`,
        );
        console.log({ result });
        return result.data;
    } catch (error) {
        console.log({ error });
        return error;
    }
};