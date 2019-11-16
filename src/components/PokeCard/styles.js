import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: ${(Dimensions.get('window').width * 90) / 100 / 2}px;
    height: 120px;
    flex-direction: row;
    background: ${props => props.backgroundColor || '#FFF'};
    border-radius: 15px;
    align-items: flex-end;
    justify-content: space-between;
    padding: 5px;
    flex-grow: 1;
    margin: 10px 8px;
    elevation: 2;
`;

export const Content = styled.View`
    height: 100%;
    margin-left: 10px;
`;

export const Name = styled.Text.attrs({
    numberOfLines: 1
})`
    margin-top: 5px;
    font-size: 18px;
    color: #FFFFFF;
    font-weight: bold;
`;

export const Types = styled.View`
    flex: 1;
    align-items: flex-start;
    margin-top: 10px;
`;

export const Type = styled.Text`
    padding: 3px 10px;
    border-radius: 50px;
    margin-bottom: 5px;
    color: #FFFFFF;
    background: rgba(255, 255, 255, .2);
`;

export const Avatar = styled.Image`
    position: absolute;
    width: 80px;
    height: 80px;
    margin-right: 10px;
    right: 0;
`;

export const Index = styled.Text`
    position: absolute;
    top: 10px;
    right: 20px;
    color: #DDDDDD;
    font-size: 16px;
    font-style: italic;
`;