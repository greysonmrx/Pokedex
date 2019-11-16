import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import About from '../../components/About';
import BaseStats from '../../components/BaseStats';
import Evolution from '../../components/Evolution';

import {
    Container,
    Top,
    Row,
    Name,
    Types,
    Type,
    Avatar,
    Content,
    Menu,
    Item,
    ItemName
} from './styles';

export default function PokeStats({ navigation }) {
    const currentPokemon = navigation.getParam('data');
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const [currentModal, setCurrentModal] = useState('about');
    const [description, setDescription] = useState('No description');
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [stats, setStats] = useState([]);

    useEffect(() => {
        getDescription();
        getStats();

        return () => {
            source.cancel();
        };
    }, []);

    function getUrl(value, isImage = false) {
        if (isImage) {
            return `https://pokeres.bastionbot.org/images/pokemon/${value.split('/')[value.split('/').length - 2]}.png`
        } else {
            return `https://pokeapi.co/api/v2/pokemon-species/${value.split('/')[value.split('/').length - 2]}`;
        }        
    }

    async function getStats() {
        const response = await axios.get(currentPokemon.url, { cancelToken: source.token });

        setStats(response.data['stats']);
        setHeight(response.data['height']);
        setWeight(response.data['weight']);
    }

    function _handleName(value) {
        let oldValue = value.split('');
        oldValue.splice(0, 1);
        
        return value.split('')[0].toUpperCase() + oldValue.join(''); 
    }

    async function getDescription() {
        const response = await axios.get(getUrl(currentPokemon.url), { cancelToken: source.token });

        response.data.flavor_text_entries.some(flavor => {
            if (flavor.language.name === 'en') {
                setDescription(flavor.flavor_text.replace(/\n/g, ' '));
            }
        });
    }

    return (
        <Container backgroundColor={currentPokemon.color}>
            <Top>
                <Row>
                    <Name>{ _handleName(currentPokemon.name) }</Name>
                    <Types>
                        {
                            currentPokemon.types.map((item, index) => (
                                <Type key={index}>{ _handleName(item.type.name) }</Type>
                            ))
                        }
                    </Types>
                </Row>                
                <Avatar 
                    resizeMode='contain'
                    source={{ uri: currentPokemon.image }}
                />
            </Top>            
            <Content>
                <Menu>
                    <Item 
                        color={currentPokemon.color}
                        onPress={() => setCurrentModal('about')}
                        active={currentModal === 'about'}
                    >
                        <ItemName active={currentModal === 'about'}>About</ItemName>
                    </Item>
                    <Item 
                        color={currentPokemon.color}
                        onPress={() => setCurrentModal('basestats')}
                        active={currentModal === 'basestats'}
                    >
                        <ItemName active={currentModal === 'basestats'}>Base stats</ItemName>
                    </Item>
                    <Item 
                        color={currentPokemon.color}
                        onPress={() => setCurrentModal('evolutions')}
                        active={currentModal === 'evolutions'}
                    >
                        <ItemName active={currentModal === 'evolutions'}>Evolution</ItemName>
                    </Item>
                </Menu>
                {
                    currentModal === 'about' ? (
                        <About 
                            description={description}
                            height={height}
                            weight={weight}
                        />
                    ) : null
                } 
                {
                    currentModal === 'basestats' ? (
                        <BaseStats 
                            stats={stats}
                            color={currentPokemon.color}
                        />
                    ) : null
                } 
                {
                    currentModal === 'evolutions' ? (
                        <Evolution 
                            currentPokemonUrl={currentPokemon.url}
                        />
                    ) : null
                }                
            </Content>
        </Container>
    );
}