import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';

import PokeCard from '../../components/PokeCard';
import PokeItemList from '../../components/PokeItemList';
import {
    PokeItemsList,
    PokeCardList,
    Content,
    Title,
    Top,
    Row,
    ButtonList,
    ButtonCard,
} from './styles';

export default function Pokedex({ navigation }) {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  const [active, setActive] = useState('list');
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState();

  async function getPokemons() {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon', { cancelToken: source.token });

    setPokemons(response.data['results']);
    setNextUrl(response.data['next']);
  }

  async function getMorePokemons() {
    const response = await axios.get(nextUrl, { cancelToken: source.token });

    const newArray = pokemons.concat(response.data['results']);

    setPokemons(newArray);
    setNextUrl(response.data['next']);
  }

  useEffect(() => {    
    getPokemons();

    return () => {
      source.cancel();
    };
  }, []);

  function viewStats(data) {
    navigation.navigate('PokeStats', { data });
  }

  return (
    <Content>
        <Top>
          <Title>Pokedex</Title>
          <Row>
            <ButtonList
              onPress={() => setActive('list')}
            >
              <Icon 
                name='list'
                size={30}
                color={ active === 'list' ? '#212121' : '#AAA'}
              />
            </ButtonList>
            <ButtonCard
              onPress={() => setActive('grid')}
            >
              <Icon 
                name='grid'
                size={30}
                color={ active === 'grid' ? '#212121' : '#AAA'}
              />
            </ButtonCard>
          </Row>
        </Top> 
        {
          active === 'list' ? (
<PokeItemsList 
            data={pokemons}
            keyExtractor={item => String(item.name)}
            numColumns={1}
            extraData={pokemons}
            onEndReached={() => getMorePokemons()}
            onEndReachedThreshold={0.5}
            renderItem={({ item , index}) => (
                  <PokeItemList 
                    key={String(index)}
                    name={item.name}
                    url={item.url}
                    onPress={viewStats}
                />
                )
            }
        />
          ) : (
<PokeCardList 
            data={pokemons}
            keyExtractor={item => String(item.name)}
            numColumns={2}
            extraData={pokemons}
            onEndReached={() => getMorePokemons()}
            onEndReachedThreshold={0.5}
            renderItem={({ item , index}) => (
                  <PokeCard 
                    key={String(index)}
                    name={item.name}
                    url={item.url}
                    onPress={viewStats}
                />
                )}
        />
          )
        }      
        
      </Content>
  );
}