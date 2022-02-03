import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar translucent backgroundColor={theme.colors.backgroundDark}></StatusBar>
        <Navigator />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
