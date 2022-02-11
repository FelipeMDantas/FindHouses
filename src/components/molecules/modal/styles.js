import styled from "styled-components";

export const ModalContainer = styled.View`
    flex: 1;
    width: ${({ theme }) => theme.metrics.wp(100)}px;
    heigth: ${({ theme }) => theme.metrics.hp(100)}px;
    margin-top: ${({ theme }) => theme.metrics.px(30)}px;
`;

export const ModalBackground = styled.View`
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.darkTransparent};
`;

export const BottomScreenContainer = styled.ScrollView.attrs({
    contentContainerStyle: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingBottom: 48,
    },
})`
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.metrics.px(24)}px;
    width: 100%;
    height: ${({ theme }) => theme.metrics.hp(74)}px;
    background-color: ${({ theme }) => theme.colors.backgroundDark};
    border-top-right-radius: ${({ theme }) => theme.metrics.px(24)}px;
    border-top-left-radius: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const HeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
`;