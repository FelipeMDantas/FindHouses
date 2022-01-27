import React from "react";
import { CardTitle, CardHightLightText, CardDescription } from '../../atoms';
import { CardContainer, CardImage, TextContainer, TextContainerLeft } from './styles';

export const HouseCard = ({ imgSource }) => {
    return (
        <CardContainer>
            <CardImage source={{ uri: imgSource }}></CardImage>
            <TextContainer>
                <TextContainerLeft>
                    <CardTitle>Casa à venda</CardTitle>
                    <CardDescription>
                        Rua Casemiro de Abreu, 1908 - Casa E, Rio de Janeiro
                    </CardDescription>
                </TextContainerLeft>
                <TextContainerRight>
                    U$ 200,00
                </TextContainerRight>
            </TextContainer>
        </CardContainer>
    ); 
};