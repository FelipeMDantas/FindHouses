import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
    width: 100%;
    height: ${({ theme }) => theme.metrics.px(240)}px;
    border-radius: ${({ theme }) => theme.metrics.px(24)}px;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: ${({ theme }) => theme.metrics.px(24)}px;
    overflow: hidden;
`;

export const CardImage = styled.Image`
    width: 100%;
    height: ${({ theme }) => theme.metrics.px(180)}px;
`;

export const TextContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: ${({ theme }) => theme.metrics.px(12)}px;
`;

export const TextContainerLeft = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const TextContainerRight = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`;