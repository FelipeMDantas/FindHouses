import React from "react";
import { FeatureCardContainer } from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import { DetailText } from "../../atoms";

export const HouseFeatureCard = ({ iconName, featureText, iconLib }) => {
    return (
        <FeatureCardContainer>
            {
                iconLib === 'FontAwesome' && <IconAwesome name={iconName} color="white" size={32} />
            }
            {
                iconLib === 'MaterialCommunityIcons' && <IconCommunity name={iconName} color="white" size={35} />
            }
            {
                iconLib === 'Ionicons' && <Icon name={iconName} color="white" size={35} />
            }
            <DetailText>{featureText}</DetailText>
        </FeatureCardContainer>
    );
};