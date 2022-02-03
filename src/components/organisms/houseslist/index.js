import React from 'react';
import { HouseCard } from '../../molecules';
import { HouseListContainer } from './styles';

export const HousesList = ({ data, children }) => {
    //console.log('address = ' + data[0].community.price_max);
    //console.log({children});
    return (
        <HouseListContainer>
            data={data}
            renderItem={({ item }) => (
                <HouseCard>
                    title={item.address.line}
                    description={`${item.address.neighborhood_name} - ${item.address.state}`}
                    imgSource={item.photos[0].href}
                    price={item.community.price_max}
                </HouseCard>
            )}
            keyExtractor={item => item.property_id}
            ListHeaderComponent={children}
        </HouseListContainer>
    );
};