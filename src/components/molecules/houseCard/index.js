import React from "react";
import { CardContainer, CardImage } from './styles';

export const HouseCard = ({ imgSource }) => {
    return (
        <CardContainer>
            <CardImage source={{ uri: imgSource }}></CardImage>
        </CardContainer>
    ); 
};