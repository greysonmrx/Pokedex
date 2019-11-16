import styled from 'styled-components/native';

export const SuperContainer = styled.ScrollView``;

export const ContainerActivityIndicator = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 20px;
    border-bottom-color: rgba(0, 0, 0, .1);
    border-bottom-width: 1px;
    justify-content: space-around;
`;

export const Title = styled.Text`
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 20px;
`;

export const Content = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Avatar = styled.Image`
    width: 50px;
    height: 50px;
        
`;

export const AvatarContainer = styled.View`
    background: rgba(0, 0, 0, 0.05);
    padding: 15px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    border-radius: 50px;
`;

export const PokemonName = styled.Text`
    font-size: 14px;
`;

export const Level = styled.Text`
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
`;
