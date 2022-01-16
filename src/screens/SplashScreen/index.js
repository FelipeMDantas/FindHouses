import React from 'react';
import { SectionView, SectionText, SectionImage } from './styles';
import SplashLogo from '../../assets/img/SevenHousesLogo.png'

export const SplashScreen = () => {

  return (
      <SectionView>
        <SectionImage source={SplashLogo} />
        <SectionText>Hey planet!</SectionText>
        <SectionText>Example</SectionText>
      </SectionView>
  );
};