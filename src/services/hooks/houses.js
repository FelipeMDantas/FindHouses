import { useHousesStore } from '../stores';
import { getHousesCall } from '../calls';

export const useHousesHooks = () => {
    const {
        setHouseList,
        setLoadingHousesList,
        housesList,
        offset,
        setOffSet,
        query,
        setQuery,
    } = useHousesStore();

    const onGetHouses = async () => {
        const result = await getHousesCall({
            ...query,
            offset,
        });
        if (offset > 0) {
            setHouseList(
                result.properties ? [...housesList, ...result.properties] : housesList,
            );
        } 
        else {
            setHouseList(result.properties ? result.properties : housesList);
        }
        setLoadingHousesList(false);
        setOffSet(offset + 15);
    };

    const onFilterHousesList = async receivedQuery => {
        setLoadingHousesList(true);

        if (receivedQuery !== query) {
            setHouseList([]);
            setOffSet(0);
        }
        
        setQuery(receivedQuery);
        const result = await getHousesCall({
            query: receivedQuery,
            offset,
        });
        setHouseList(result.properties ? result.properties : []);
        setLoadingHousesList(false);
    }

    return {
        onGetHouses,
        onFilterHousesList,
    };
};