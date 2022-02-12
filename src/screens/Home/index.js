import React, { useEffect, useState } from "react";
import { ScreenContainer, TitleContainer, TopContainer, ContentContainer } from './styles';
import { HousesList, IconButton, Input, Loader, FilterModal, Title } from '../../components';
import { getHousesCall } from "../../services/calls";
import { useHousesStore } from "../../services/stores";

export const HomeScreen = () => {
    //const [housesListData, setHousesListData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { housesList, setHouseList } = useHousesStore();
    const [filterModalVisible, setFilterModalVisible] = useState(false);

    /*const callGetHouses = async () => {
        const result = await getHousesCall();
        setHousesListData(result.properties ? result.properties : []);
        setLoading(false);
    };*/

    const callGetHouses = () => {
        const result = getHousesCall();
        setHouseList(result.properties ? result.properties : []);
        setLoading(false);
    };

    useEffect(() => {
        callGetHouses();
    }, []);

    const openFilterModal = () => {
        setFilterModalVisible(true);
    };

    const closeFilterModal = () => {
        setFilterModalVisible(false);
    };

    return (
        <ScreenContainer>
            <HousesList data={housesList} loading={loading}>
                <ContentContainer>
                    <TopContainer>
                        <TitleContainer>
                            <Title>Encontre aqui seu imóvel</Title>
                        </TitleContainer>

                        <IconButton iconName="filter" onPress={openFilterModal}/>
                    </TopContainer>

                    <Input label="Localização" placeholder="Digite o endereço" />

                    {loading && <Loader />}

                </ContentContainer>
            </HousesList>

            {filterModalVisible && (
                <FilterModal visible={filterModalVisible} onClose={closeFilterModal} />
            )}
            
        </ScreenContainer>
    );
};