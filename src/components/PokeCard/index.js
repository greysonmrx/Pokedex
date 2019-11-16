import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Colors from '../../config/colors';
import {
    Container,
    Content,
    Name,
    Types,
    Type,
    Avatar,
    Index
} from './styles';

export default function PokeCard({ name, url, onPress }) {
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
            backgroundColor={Colors[color]}
            onPress={() => onPress({ color: Colors[color], name, types, url,
                image: `https://pokeres.bastionbot.org/images/pokemon/${url.split('/')[url.split('/').length - 2]}.png`
            })}
        >
            <Content>
                <Name>{_handleName(name)}</Name>
                <Types>
                    {
                        types.map((item, index) => (
                            <Type key={String(index)}>{_handleName(item.type.name)}</Type>
                        ))
                    }
                </Types>
            </Content>
            <Avatar 
                source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${url.split('/')[url.split('/').length - 2]}.png` }}
            />
            <Index>{getIndex(url.split('/')[url.split('/').length - 2])}</Index>
        </Container>
    );
}