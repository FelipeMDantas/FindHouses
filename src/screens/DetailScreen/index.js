import React from "react";
import { IconButton } from "../../components/atoms";
import { BottomScreenContainer, ImageBackground, ScreenContainer } from "./styles";

export const DetailScreen = ({ route, navigation }) => {
    const { selectedHouse } = route.params;
    const hqImage = selectedHouse.photos[0].href.replace('s.jpg', 'od-w1024_h768.webp');;

    console.log({ selectedHouse });

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
            <BottomScreenContainer />
        </ScreenContainer>
    );
};