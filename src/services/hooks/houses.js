import { useHousesStore } from '../stores';
import { getHousesCall } from '../calls';

export const useHousesHooks = () => {
    const {
        setHouseList,
        setLoadingHousesList,
        housesList,
        offset,
        setOffSet
    } = useHousesStore();

    const onGetHouses = async () => {
        const result = await getHousesCall();
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

    const onFilterHousesList = async query => {
        setLoadingHousesList(true);
        const result = await getHousesCall(query);
        setHouseList(result.properties ? result.properties : []);
        setLoadingHousesList(false);
    }

    return {
        onGetHouses,
        onFilterHousesList,
    };
};