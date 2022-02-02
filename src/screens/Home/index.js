import React, { useEffect, useState } from "react";
import { ScreenContainer, TitleContainer, TopContainer, ContentContainer } from './styles';
import { HouseCard, HousesList, IconButton, Input, Title } from '../../components';
import { getHousesCall } from "../../services/calls";

export const HomeScreen = () => {
    const [housesListData, setHousesListData] = useState([]);
    //const [loading, setLoading] = useState([]);

    const callGetHouses = async () => {
        const result = await getHousesCall();
        console.log({ result });
        setHousesListData(result.properties ? result.properties : []);
        //setLoading(false);
    };

    useEffect(() => {
        callGetHouses();
    }, []);

    return (
        <ScreenContainer>
            <HousesList data={housesListData}>
                <ContentContainer>
                    <TopContainer>
                        <TitleContainer>
                            <Title>Encontre aqui seu imóvel</Title>
                        </TitleContainer>

                        <IconButton iconName="filter"></IconButton>
                    </TopContainer>

                    <Input label="Localização" placeholder="Digite o endereço"></Input>
                </ContentContainer>
            </HousesList>
        </ScreenContainer>
    );
};