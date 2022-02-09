import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITE_KEY = '@FindHouses:Favorites';

export const saveData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.log({ error: e });
    }
};

export const getData = async key => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        } else {
            return null;
        }
    } catch (e) {
        console.log({ error: e });
    }
};

export const getIfHouseIsFavorite = async houseId => {
    const savedFavorites = await getData(FAVORITE_KEY);
    if (savedFavorites) {
        const arrayFavorites = JSON.parse(arrayFavorites);
        if (arrayFavorites.find(h => h === houseId)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

export const saveHouseAsFavorite = async houseId => {
    const savedFavorites = await getData(FAVORITE_KEY);
    if (savedFavorites) {
        const arrayFavorites = JSON.parse(arrayFavorites);
        if (arrayFavorites.find(h => h === houseId)) {
            return {
                error: 'Imóvel já é favorito',
            };
        }
        arrayFavorites.push(houseId);
        await saveData(FAVORITE_KEY, JSON.stringify(arrayFavorites));
    } else {
        const arrayFavorites = JSON.parse([houseId]);
        await saveData(FAVORITE_KEY, JSON.stringify(arrayFavorites));
    }
    return;
};
