import React from 'react';
import { HouseCard } from '../../molecules';
import { HouseListContainer } from './styles';

export const HousesList = ({ data, children, loading }) => {
    console.log({data});

        return (
            <HouseListContainer
                data={data}
                refreshing={loading}
                renderItem={({ item }) => (
                    <HouseCard
                        item={item}
                        title={item.address.line}
                        description={`${item.address.neighborhood_name} - ${item.address.state}`}
                        imgSource={item.photos[0] ? item.photos[0].href : 0}                        
                        price={item.community ? item.community.price_max : 0}
                    />
                )}
                keyExtractor={item => item.property_id}
                ListHeaderComponent={children}
            />
        );
};