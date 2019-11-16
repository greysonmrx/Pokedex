import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Colors from '../../config/colors';
import {
    Container,
    Content,
    Avatar,
    Name,
    Type,
    ContentText,
    Index
} from './styles';

export default function PokeItemList({ name, url, onPress }) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const [color, setColor] = useState('');
    const [types, setTypes] = useState([]);
    
    useEffect(() => {
        getType();

        return () => {
            source.cancel();
        };
    },[]);

    function getImage(typeName) {
        switch (typeName) {
            case 'Bug': {
                return require(`../../../assets/images/Bug.png`);
            };
            case 'Dark': {
                return require(`../../../assets/images/Dark.png`);
            };
            case 'Dragon': {
                return require(`../../../assets/images/Dragon.png`);
            };
            case 'Electric': {
                return require(`../../../assets/images/Electric.png`);
            };
            case 'Fairy': {
                return require(`../../../assets/images/Fairy.png`);
            };
            case 'Fighting': {
                return require(`../../../assets/images/Fighting.png`);
            };
            case 'Fire': {
                return require(`../../../assets/images/Fire.png`);
            };
            case 'Flying': {
                return require(`../../../assets/images/Flying.png`);
            };
            case 'Ghost': {
                return require(`../../../assets/images/Ghost.png`);
            };
            case 'Grass': {
                return require(`../../../assets/images/Grass.png`);
            };
            case 'Ground': {
                return require(`../../../assets/images/Ground.png`);
            };
            case 'Ice': {
                return require(`../../../assets/images/Ice.png`);
            };
            case 'Normal': {
                return require(`../../../assets/images/Normal.png`);
            };
            case 'Poison': {
                return require(`../../../assets/images/Poison.png`);
            };
            case 'Psychic': {
                return require(`../../../assets/images/Psychic.png`);
            };
            case 'Rock': {
                return require(`../../../assets/images/Rock.png`);
            };
            case 'Steel': {
                return require(`../../../assets/images/Steel.png`);
            };
            case 'Water': {
                return require(`../../../assets/images/Water.png`);
            };
            default: {
                return require(`../../../assets/images/Bug.png`);
            };            
        }        
    }

    async function getType() {
        const response = await axios.get(url, { cancelToken: source.token });

        setTypes(response.data['types']);
        setColor(response.data['types'][response.data['types'].length - 1].type.name);
    }

    function _handleName(value) {
        let oldValue = value.split('');
        oldValue.splice(0, 1);
        
        return value.split('')[0].toUpperCase() + oldValue.join(''); 
    }

    function getIndex(value) {
        if (String(value).length === 1) {
            return `#00${value}`;
        } else if (String(value).length === 2) {
            return `#0${value}`;
        } else {
            return `#${value}`;
        }
    }

    return (
        <Container
            onPress={() => onPress({ color: Colors[color], name, types, url,
                image: `https://pokeres.bastionbot.org/images/pokemon/${url.split('/')[url.split('/').length - 2]}.png`
            })}
        >
            <Content>
                <Avatar 
                    source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${url.split('/')[url.split('/').length - 2]}.png` }}
                />
                <ContentText>
                    <Name>{_handleName(name)}</Name>
                    <Index>{getIndex(url.split('/')[url.split('/').length - 2])}</Index>
                </ContentText>
            </Content>
            <Content>
                {
                    types.map((item, index) => (
                        <Type 
                            key={String(index)}
                            source={getImage(_handleName(item.type.name))}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}