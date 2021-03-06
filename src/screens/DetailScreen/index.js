import React, { useEffect, useState } from "react";
import { DetailSectionTitle, DetailSubTitle, DetailText, DetailTitle, HouseFeatureCard, IconButton, Loader } from "../../components";
import { BottomScreenContainer, FeaturesContainer, ImageBackground, ScreenContainer } from "./styles";
import { getHouseDetail } from '../../services/calls';
import { useHousesStore } from '../../services/stores';
import { getIfHouseIsFavorite, removeHouseAsFavorite, saveHouseAsFavorite } from "../../services/db";
import { Alert } from "react-native";

export const DetailScreen = ({ navigation }) => {
    const { selectedHouse } = useHousesStore();
    const [favorite, setFavorite] = useState(false);
    const hqImage = selectedHouse.photos[0] ? selectedHouse.photos[0].href.replace('s.jpg', 'od-w1024_h768.webp') : 0;
    const [neighborhoodName, setneighborhoodName] = useState([]);
    const [loading, setLoading] = useState(true);
    const [houseDetail, setHouseDetail] = useState();

    const callGetHouseDetail = async () => {
        const result = await getHouseDetail(selectedHouse.property_id);
        console.log({ result });
        setHouseDetail(result.properties[0] ? result.properties[0] : null)
        setLoading(false);
    };

    const checkIfHouseIsFavorite = async() => {
        const isFavorite = await getIfHouseIsFavorite(selectedHouse.property_id);
        console.log({ isFavorite });
        setFavorite(isFavorite)
    };

    const saveFavoriteHouse = async () => {
        if (favorite) {
            await removeHouseAsFavorite(selectedHouse.property_id);
            Alert.alert('Imóvel removido como favorito com sucesso!');
            setFavorite(false);
        }
        else {
            await saveHouseAsFavorite(selectedHouse.property_id);
            Alert.alert('Imóvel salvo como favorito com sucesso!');
            setFavorite(true);
        }
    };

    useEffect(() => {
        callGetHouseDetail();
        checkIfHouseIsFavorite();
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
                <IconButton 
                    onPress={saveFavoriteHouse} 
                    iconName={favorite ? "star" : "star-outline"}
                    transparent
                    fill={favorite}
                />
            </ImageBackground>
            {
                loading ? (
                    <BottomScreenContainer>
                        <Loader />
                    </BottomScreenContainer>
                ) : (
                    <BottomScreenContainer>
                        <DetailTitle>{houseDetail.address.line}</DetailTitle>
                        <DetailSubTitle>U$ {houseDetail.community ? houseDetail.community.price_max : 0}</DetailSubTitle>
                        <DetailText>{`${neighborhoodName}${houseDetail.address.state}`}</DetailText>

                        <DetailSectionTitle mt={24} mb={12}>Detalhes</DetailSectionTitle>

                        <FeaturesContainer>
                            <HouseFeatureCard 
                                iconLib="MaterialCommunityIcons"
                                iconName="floor-plan" 
                                featureText={`${houseDetail.lot_size.size} ${houseDetail.lot_size.units}`} 
                            />
                            <HouseFeatureCard 
                                iconLib="Ionicons"
                                iconName="bed-outline" 
                                featureText={
                                    `${houseDetail.community ? houseDetail.community.beds_min : 0} - ${houseDetail.community ? houseDetail.community.beds_min : 0} bed(s)`
                                }
                            />
                            <HouseFeatureCard
                                iconLib="FontAwesome"
                                iconName="bathtub" 
                                featureText={
                                    `${houseDetail.community ? houseDetail.community.baths_min : 0} - ${houseDetail.community ? houseDetail.community.baths_max : 0} bath(s)`
                                } 
                            />
                        </FeaturesContainer>

                        <DetailSectionTitle mt={24} mb={12}>Vantagens do Imóvel</DetailSectionTitle>
                        {houseDetail.features[1].text.map(item => (
                            <DetailText mb={2} key={item}>- {item}</DetailText>
                        ))}
                    </BottomScreenContainer>
                )}
        </ScreenContainer>
    );
};