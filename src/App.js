import React from 'react';
import { HomeScreen } from './screens';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent backgroundColor={theme.colors.backgroundDark}></StatusBar>
      <HomeScreen />
    </ThemeProvider>
  );
};

export default App;
