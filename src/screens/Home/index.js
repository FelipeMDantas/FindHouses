import React, { useEffect, useState } from "react";
import { ScreenContainer, TitleContainer, TopContainer, ContentContainer } from './styles';
import { HousesList, IconButton, Input, Loader, Modal, Title } from '../../components';
import { getHousesCall } from "../../services/calls";
import { useHousesStore } from "../../services/stores";

export const HomeScreen = () => {
    //const [housesListData, setHousesListData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { housesList, setHouseList } = useHousesStore();

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

    return (
        <ScreenContainer>
            {/*<HousesList data={housesList} loading={loading}>
                <ContentContainer>
                    <TopContainer>
                        <TitleContainer>
                            <Title>Encontre aqui seu imóvel</Title>
                        </TitleContainer>

                        <IconButton iconName="filter" />
                    </TopContainer>

                    <Input label="Localização" placeholder="Digite o endereço" />

                    {loading && <Loader />}

                </ContentContainer>
    </HousesList>*/}
            <Modal visible title="Filtrar" />
        </ScreenContainer>
    );
};