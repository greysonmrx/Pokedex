import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import Pokedex from './screens/Pokedex';
import PokeStats from './screens/PokeStats';

export default createAppContainer(
    createStackNavigator({
        Pokedex: {
            screen: Pokedex,
            navigationOptions: ({ navigation }) => ({
                header: null
            }),
        },
        PokeStats: {
            screen: PokeStats,
            navigationOptions: ({ navigation }) => ({
                headerStyle: {
                    backgroundColor: navigation.getParam('data').color,
                    elevation: 0,
                },
                headerTintColor: '#FFFFFF'
            }),
        }
    }, {
        initialRouteName: 'Pokedex',
        headerLayoutPreset: 'center'
    })
);