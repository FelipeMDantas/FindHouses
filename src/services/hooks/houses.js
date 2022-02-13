import { useHousesStore } from '../stores';
import { getHousesCall } from '../calls';

export const useHousesHooks = () => {
    const { setHousesList, setLoadingHousesList } = useHousesStore();

    const onGetHouses = async () => {
        const result = await getHousesCall();
        setHousesList(result.properties ? result.properties : []);
        setLoadingHousesList(false);
    };

    const onFilterHousesList = async query => {
        setLoadingHousesList(true);
        const result = await getHousesCall(query);
        setHousesList(result.properties ? result.properties : []);
        setLoadingHousesList(false);
    }

    return {
        onGetHouses,
        onFilterHousesList,
    };
};