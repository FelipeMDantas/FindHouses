import React, { useEffect, useState } from "react";
import { DetailSectionTitle, DetailSubTitle, DetailText, DetailTitle, IconButton } from "../../components/atoms";
import { BottomScreenContainer, ImageBackground, ScreenContainer } from "./styles";
import { getHouseDetail } from '../../services/calls';

export const DetailScreen = ({ route, navigation }) => {
    const { selectedHouse } = route.params;
    const hqImage = selectedHouse.photos[0].href.replace('s.jpg', 'od-w1024_h768.webp');;
    const [neighborhoodName, setneighborhoodName] = useState([]);

    const validateNeighborhoodName = () => {
        setneighborhoodName(
            selectedHouse.address.neighborhood_name ? selectedHouse.address.neighborhood_name + ' - ' : ''
        );
    };

    useEffect(() => {
        validateNeighborhoodName();
    }, []);

    const callGetHouseDetail = async () => {
        const result = await getHouseDetail(selectedHouse.property_id);
        console.log({ result });
    };

    useEffect(() => {
        callGetHouseDetail();
    }, []);

    const onClickArrowBack = () => {
        navigation.goBack();
    }

    return (
        <ScreenContainer>
            <ImageBackground source={{ uri: hqImage }}>
                <IconButton 
                    iconName="chevron-back" 
                    transparent 
                    onPress={onClickArrowBack}
                />
                <IconButton iconName="star-outline" transparent />
            </ImageBackground>
            <BottomScreenContainer>
                <DetailTitle>{selectedHouse.address.line}</DetailTitle>
                <DetailSubTitle>U$ {selectedHouse.community.price_max}</DetailSubTitle>
                <DetailText>{`${neighborhoodName}${selectedHouse.address.state}`}</DetailText>

                <DetailSectionTitle>Detalhes</DetailSectionTitle>

                <DetailSectionTitle>Vantagens do Imóvel</DetailSectionTitle>
            </BottomScreenContainer>
        </ScreenContainer>
    );
};