import React from "react";
import { ScreenContainer, TitleContainer, TopContainer } from './styles';
import { IconButton, Input, Title } from '../../components';

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
        </ScreenContainer>
    );
};