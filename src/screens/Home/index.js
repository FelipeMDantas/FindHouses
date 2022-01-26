import React from "react";
import { ScreenContainer, TitleContainer, TopContainer } from './styles';
import { HouseCard, IconButton, Input, Title } from '../../components';

export const HomeScreen = () => {
    return (
        <ScreenContainer>
            <TopContainer>
                <TitleContainer>
                    <Title>Encontre aqui seu imóvel</Title>
                </TitleContainer>

                <IconButton iconName="filter"></IconButton>
            </TopContainer>

            <Input label="Localização" placeholder="Digite o endereço"></Input>

            <HouseCard imgSource="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></HouseCard>
        </ScreenContainer>
    );
};