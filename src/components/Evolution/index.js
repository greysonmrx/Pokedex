import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ActivityIndicator } from 'react-native-paper';
import axios from 'axios';

import {
    SuperContainer,
    Container,
    Title,
    Content,
    Avatar,
    AvatarContainer,
    PokemonName,
    Level,
    ContainerActivityIndicator
} from './styles';

export default function Evolution({ currentPokemonUrl }) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const [evolutions, setEvolutions] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getEvolutions(String(currentPokemonUrl));

        return () => {
            source.cancel();
        };
    },[]);

    function getUrl(value, isImage = false) {
        if (isImage) {
            return `https://pokeres.bastionbot.org/images/pokemon/${value.split('/')[value.split('/').length - 2]}.png`
        } else {
            return `https://pokeapi.co/api/v2/pokemon-species/${value.split('/')[value.split('/').length - 2]}`;
        }        
    }

    async function getEvolutions(url) {
        setLoading(true);
        const responseUrl = await axios.get(getUrl(url), { cancelToken: source.token });
        const response = await axios.get(responseUrl.data['evolution_chain'].url, { cancelToken: source.token });

        let data = {
            firstEvolution: undefined,
            secondEvolution: undefined,
            thirdEvolution: undefined
        }

        data.firstEvolution = {
            image: getUrl(response.data['chain'].species.url, true),
            name: response.data['chain'].species.name
        }
        
        response.data['chain'].evolves_to.some(evolution => {
            evolution.evolution_details.some(e => {
                data.firstEvolution.level = e.min_level;
            });

            data.secondEvolution = {
                image: getUrl(evolution.species.url, true),
                name: evolution.species.name
            }

            if (evolution.evolves_to) {
                evolution.evolves_to.some(evolution2 => {
                    evolution2.evolution_details.some(e => {
                        data.secondEvolution.level = e.min_level;
                    });  

                    data.thirdEvolution = {
                        image: getUrl(evolution2.species.url, true),
                        name: evolution2.species.name
                    }
                });
            }
        });  

        setEvolutions(data);
        setLoading(false);
    }

    function _handleName(value) {
        let oldValue = value.split('');
        oldValue.splice(0, 1);
        
        return value.split('')[0].toUpperCase() + oldValue.join(''); 
    }

    if (loading) {
        return (
            <ContainerActivityIndicator>
                <ActivityIndicator animating={true} color='#212121' />
            </ContainerActivityIndicator>
        );
    }
    
    return (
        <SuperContainer>
            <Title>Evolution chain</Title>
            <Container> 
                <Content>
                    <AvatarContainer>
                        <Avatar 
                            source={{ uri: evolutions.firstEvolution.image }}
                        />
                    </AvatarContainer>
                    <PokemonName>{ _handleName(evolutions.firstEvolution.name ) }</PokemonName>
                </Content>
                <Content>
                    <Icon 
                        name='long-arrow-right'
                        size={30}
                        color='#BBBBBB'
                    />
                    {
                        evolutions.firstEvolution.level ? (
                            <Level>Lvl. { evolutions.firstEvolution.level  }</Level>
                        ) : null
                    }
                </Content>
                <Content>
                    <AvatarContainer>
                        <Avatar 
                            source={{ uri: evolutions.secondEvolution.image }}
                        />
                    </AvatarContainer>                    
                    <PokemonName>{ _handleName(evolutions.secondEvolution.name) }</PokemonName>
                </Content>
            </Container>
            {
                evolutions.thirdEvolution ? (
                    <Container>
                        <Content>
                            <AvatarContainer>
                                <Avatar 
                                    source={{ uri: evolutions.secondEvolution.image}}
                                />
                            </AvatarContainer>                            
                            <PokemonName>{ _handleName(evolutions.secondEvolution.name) }</PokemonName>
                        </Content>
                        <Content>
                            <Icon 
                                name='long-arrow-right'
                                size={30}
                                color='#BBBBBB'
                            />
                            {
                                evolutions.secondEvolution.level ? (
                                    <Level>Lvl. { evolutions.secondEvolution.level}</Level>
                                ) : null
                            }
                            
                        </Content>
                        <Content>
                            <AvatarContainer>
                               <Avatar 
                                    source={{ uri: evolutions.thirdEvolution.image}}
                                /> 
                            </AvatarContainer>
                            
                            <PokemonName>{ _handleName(evolutions.thirdEvolution.name) }</PokemonName>
                        </Content>
                    </Container>
                ) : null
            }           
        </SuperContainer>
    );
}