import React, { useEffect, useState } from "react";
import { ScreenContainer, TitleContainer, TopContainer, ScreenScroll } from './styles';
import { HousesList, IconButton, Input, Title } from '../../components';
import { getHousesCall } from "../../services/calls";

export const HomeScreen = () => {
    const [housesListData, setHousesListData] = useState([]);

    const callGetHouses = async () => {
        const result = await getHousesCall();
        setHousesListData(result.properties ? result.properties : []);
    };

    useEffect(() => {
        callGetHouses();
    }, []);

    return (
        <ScreenContainer>
            <TopContainer>
                <TitleContainer>
                    <Title>Encontre aqui seu imóvel</Title>
                </TitleContainer>

                <IconButton iconName="filter"></IconButton>
            </TopContainer>

            <Input label="Localização" placeholder="Digite o endereço"></Input>

            <HousesList data={housesListData} />
        </ScreenContainer>
    );
};