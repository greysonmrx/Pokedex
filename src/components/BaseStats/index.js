import React from 'react';
import { ProgressBar } from 'react-native-paper';
import { Dimensions } from 'react-native';

import {
    Stats,
    Stat,
    StatName,
    StatValue
} from './styles';

export default function BaseStats({ stats, color }) {
    function _handleStatName(statName) {
        switch(statName) {
            case 'speed': {
                return 'Speed';
            };
            case 'special-defense': {
                return 'Sp. Def';
            };
            case 'special-attack': {
                return 'Sp. Atk';
            };
            case 'defense': {
                return 'Defense';
            };
            case 'attack': {
                return 'Attack';
            };
            case 'hp': {
                return 'HP';
            };
        }
    }
    
    return (
        <Stats>
            {
                stats.map(({ base_stat, stat }, index) => (
                    <Stat key={index}>
                        <StatName>{ _handleStatName(stat.name) }</StatName>
                        <StatValue>{ base_stat }</StatValue>
                        <ProgressBar style={{ width: Dimensions.get('window').width - 180 }} progress={base_stat / 100} color={color}/>
                    </Stat>
                ))                        
            }
        </Stats>
    );
}