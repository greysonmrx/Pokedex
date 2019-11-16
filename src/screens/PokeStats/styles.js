import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Top = styled.View`
    flex: 1;
    align-items: center;
`;

export const Row = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
`;

export const Name = styled.Text`
    font-size: 35px;
    font-weight: bold;
    color: #FFFFFF;
`;

export const Types = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Type = styled.Text`
    padding: 3px 10px;
    border-radius: 50px;
    margin: 5px;
    color: #FFFFFF;
    background: rgba(255, 255, 255, .25);
`;

export const Avatar = styled.Image`
    position: absolute;
    top: 30%;
    width: 100%;
    height: 200px;
    z-index: 10;
`;

export const Content = styled.View`
    flex: 1.5;
    background: #EAEBF5;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;

export const Menu = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 40px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, .1);
`;

export const Item = styled.TouchableOpacity`
    padding: 10px 5px 20px 5px;
    border-bottom-width: 3px;
    border-bottom-color: ${props => props.active ? props.color : '#EEE'};
`;

export const ItemName = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: ${props => props.active ? '#000000' : '#BBB'};
`;