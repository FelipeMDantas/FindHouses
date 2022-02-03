import React from "react";
import { CardTitle, CardHightLightText, CardDescription } from '../../atoms';
import { CardContainer, CardImage, TextContainer, TextContainerLeft, TextContainerRight } from './styles';

console.log('HouseCard');

export const HouseCard = ({ imgSource, title, description, price }) => {
    console.log('HouseCardInside');

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <CardContainer>
            <CardImage source={{ uri: imgSource }}></CardImage>
            <TextContainer>
                <TextContainerLeft>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>
                        {description}
                    </CardDescription>
                </TextContainerLeft>
                <TextContainerRight>
                    <CardHightLightText>{formattedPrice.format(price)}</CardHightLightText>
                </TextContainerRight>
            </TextContainer>
        </CardContainer>
    );
};