import React from 'react';
import { BottomScreenContainer, HeaderContainer, ModalBackground, ModalContainer } from './styles';
import { Title, IconButton } from '../../atoms';

export const Modal = ({ visible, onClose, title }) => {
    return (
        <ModalContainer 
            transparent
            visible={visible}
            onRequestClose={onClose}
        >
            <ModalBackground>
                <BottomScreenContainer>
                    <HeaderContainer>
                        <Title>{title}</Title>
                        <IconButton iconName="close" onPress={onClose} />
                    </HeaderContainer>
                </BottomScreenContainer>
            </ModalBackground>
        </ModalContainer>
    );
};