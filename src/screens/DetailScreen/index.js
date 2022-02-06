import React, { useEffect, useState } from "react";
import { DetailSectionTitle, DetailSubTitle, DetailText, DetailTitle, HouseFeatureCard, IconButton, Loader } from "../../components";
import { BottomScreenContainer, FeaturesContainer, ImageBackground, ScreenContainer } from "./styles";
import { getHouseDetail } from '../../services/calls';

export const DetailScreen = ({ route, navigation }) => {
    const { selectedHouse } = route.params;
    const hqImage = selectedHouse.photos[0].href.replace('s.jpg', 'od-w1024_h768.webp');;
    const [neighborhoodName, setneighborhoodName] = useState([]);
    const [loading, setLoading] = useState(true);
    const [houseDetail, setHouseDetail] = useState();

    const callGetHouseDetail = async () => {
        const result = await getHouseDetail(selectedHouse.property_id);
        //console.log({ result });
        setHouseDetail(result.properties[0] ? result.properties[0] : null)
        setLoading(false);
    };

    useEffect(() => {
        callGetHouseDetail();
    }, []);

    const validateNeighborhoodName = () => {
        setneighborhoodName(
            selectedHouse.address.neighborhood_name ? selectedHouse.address.neighborhood_name + ' - ' : ''
        );
    };

    useEffect(() => {
        validateNeighborhoodName();
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
            {
                loading ? (
                    <BottomScreenContainer>
                        <Loader />
                    </BottomScreenContainer>
                ) : (
                    <BottomScreenContainer>
                        <DetailTitle>{houseDetail.address.line}</DetailTitle>
                        <DetailSubTitle>U$ {houseDetail.community.price_max}</DetailSubTitle>
                        <DetailText>{`${neighborhoodName}${houseDetail.address.state}`}</DetailText>

                        <DetailSectionTitle>Detalhes</DetailSectionTitle>

                        <FeaturesContainer>
                            <HouseFeatureCard iconName="floor-plan" featureText={`${houseDetail.lot_size.size} ${houseDetail.lot_size.units}`} />
                            <HouseFeatureCard iconName="bed-outline" featureText={`${houseDetail.beds} bed(s)`} />
                            <HouseFeatureCard iconName="bed-outline" featureText={`${houseDetail.beds} bed(s)`} />
                        </FeaturesContainer>

                        <DetailSectionTitle>Vantagens do Imóvel</DetailSectionTitle>
                        {houseDetail.features[1].text.map(item => (
                            <DetailText key={item}>- {item}</DetailText>
                        ))}
                    </BottomScreenContainer>
                )}
        </ScreenContainer>
    );
};