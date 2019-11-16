import styled from 'styled-components/native';

export const Stats = styled.ScrollView`
    padding: 20px;
`;

export const Stat = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 10px 0px;
`;

export const StatName = styled.Text`
    color: #000000;
    font-size: 13px;
    width: 80px;
`;

export const StatValue = styled.Text`
    width: 40px;
    text-align: center;
    color: #000000;
    font-size: 13px;
    font-weight: bold;
    margin-right: 10px;
`;