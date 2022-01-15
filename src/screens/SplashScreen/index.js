import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SectionView } from './styles';

export const SplashScreen = () => {

  return (
      <SectionView>
        <Text style={styles.sectionText}>Hey planet!</Text>
      </SectionView>
  );
};

const styles = StyleSheet.create({
  sectionView: {
    height: 100,
    width: '100%',
    backgroundColor: 'red',
  },
  sectionText: {
    color: 'white',
  },
});