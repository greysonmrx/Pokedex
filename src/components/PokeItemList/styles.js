import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    height: 80px;
    padding: 0px 20px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
    border-bottom-width: 1px;
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.Image`
    width: 50px;
    height: 50px;
`;

export const Name = styled.Text`
    color: #212121;
    font-size: 17px;
`;

export const Type = styled.Image`
    width: 25px;
    height: 25px;
    margin-left: 10px; 
`;

export const ContentText = styled.View`
    align-items: flex-start;
    margin-left: 20px;
`;

export const Index = styled.Text`
    margin-top: 5px;
    color: #CCCCCC;
    font-size: 16px;
    font-style: italic;
`;
