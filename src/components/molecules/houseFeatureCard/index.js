import React from "react";
import { FeatureCardContainer } from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { DetailText } from "../../atoms";

export const HouseFeatureCard = ({ iconName, featureText }) => {

    featureText == '1 beds' ? featureText = '1 bed' : featureText;

    console.log({featureText});

    return (
        <FeatureCardContainer>
            {iconName != 'floor-plan' ?
                <Icon name={iconName} color="white" size={35} /> :
                <IconCommunity name={iconName} color="white" size={35} />
            }
            <DetailText>{featureText}</DetailText>
        </FeatureCardContainer>
    );
};