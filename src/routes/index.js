import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, SplashScreen } from '../screens';

export const Navigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator >
            <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    );
};