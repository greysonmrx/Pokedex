import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const PokeCardList = styled(FlatList)`
    flex: 1;
`;

export const PokeItemsList = styled(FlatList)`
    flex: 1;
`;

export const Content = styled.View`
    flex: 1;
    background-color: #FFFFFF;
`;

export const Title = styled.Text`
    font-size: 35px;
    font-weight: bold;
    color: #212121;
`;

export const Top = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 50px 15px 15px 15px;
    align-items: center;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ButtonList = styled(RectButton)`
    border-radius: 100px;    
`;

export const ButtonCard = styled(RectButton)`
    border-radius: 100px;
    margin-left: 10px;
`;
