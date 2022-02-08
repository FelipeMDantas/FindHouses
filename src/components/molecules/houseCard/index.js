import { useNavigation } from '@react-navigation/native';
import { useHousesStore } from '../../../services/stores';
import React from 'react';
import { CardTitle, CardHightLightText, CardDescription } from '../../atoms';
import { 
    CardContainer, 
    CardImage, 
    TextContainer, 
    TextContainerLeft, 
    TextContainerRight 
} from './styles';

export const HouseCard = ({ imgSource, title, description, price, item }) => {
    /*const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });*/

    const navigation = useNavigation();
    const { setSelectedHouse } = useHousesStore();

    const onClickItemContainer = () => {
        setSelectedHouse(item);
        navigation.navigate('Detail');
    };

    imgSource = imgSource.replace('s.jpg', 'od-w1024_h768.webp');
    description = description.replace('undefined - ', '');

    return (
        <CardContainer onPress={() => onClickItemContainer()}>
            <CardImage source={{ uri: imgSource }} />
            <TextContainer>
                <TextContainerLeft>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </TextContainerLeft>
                <TextContainerRight>
                    <CardHightLightText>
                        U$ {price}
                    </CardHightLightText>
                </TextContainerRight>
            </TextContainer>
        </CardContainer>
    );
};