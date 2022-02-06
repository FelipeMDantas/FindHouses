import React, { useEffect, useState } from "react";
import { ScreenContainer, TitleContainer, TopContainer, ContentContainer} from './styles';
import { DetailText, HousesList, IconButton, Input, Loader, Title } from '../../components';
import { getHousesCall } from "../../services/calls";

export const HomeScreen = () => {
    const [housesListData, setHousesListData] = useState([]);
    const [loading, setLoading] = useState(true);

    const callGetHouses = async () => {
        const result = await getHousesCall();
        setHousesListData(result.properties ? result.properties : []);
        setLoading(false);
    };

    useEffect(() => {
        callGetHouses();
    }, []);

    return (
        <ScreenContainer>
            <HousesList data={housesListData} loading={loading}>
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
            </HousesList>
        </ScreenContainer>
    );
};