import create from 'zustand';

export const useHousesStore = create(set => ({
  offset: 0,
  setOffSet: offset => set({ offset }),

  loadingHousesList: true,
  setLoadingHousesList: loadingHousesList => set({ loadingHousesList }),

  housesList: [],
  setHouseList: housesList => set({ housesList }),

  selectedHouse: null,
  setSelectedHouse: selectedHouse => set ({ selectedHouse }),
}));