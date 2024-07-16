import React, { useEffect, useState } from 'react';
import { Content, Container } from './favoritesStyle';
import { getRandom } from '../services/api';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;

const Favorites = () => {
    const [poke, setPoke] = useState([]);
    const [favorite, setFavorite] = useState([]);

    const getAll = async () => {
        const array = [];
        for (let i = 1; i <= 8; i++) {
            try {
                const data = await getRandom(i);
                if (data) {
                    array.push({
                        name: data.name,
                        id: data.id,
                        image: data.sprites.front_default,
                    });
                }
            } catch (error) {
                console.error(`Error fetching Pokémon ${i}:`, error);
            }
        }
        return array;
    };

    useEffect(() => {
        const fetchPokemons = async () => {
            const pokemonData = await getAll();
            setPoke(pokemonData);
        };

        fetchPokemons();
    }, []);

    const handleClick = (poke) => {
        setFavorite([...favorite, poke])
    }
    const handleDelete = (id) => {
        setFavorite(favorite.filter((res) => res.id !== id))
    }
    return (
        <Content>
            <h1>Pokemon</h1>
            <Container>
                <Row justify="center">
                    {poke.map((res, index) => (
                        <Col xs={6} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Card
                                hoverable
                                style={{ margin: '1rem', height: '200px', width: '150px' }}
                                cover={<img src={res.image} />}
                                onClick={() => handleClick(res)}
                            >
                                <Meta title={res.name} ></Meta>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {
                    favorite.length > 0 ? <h1>Favoritos</h1> : null
                }


                {
                    favorite ? (

                        <Row justify="center">

                            {favorite.map((res, index) => (
                                <Col xs={6} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Card
                                        hoverable
                                        style={{ margin: '1rem', height: '200px', width: '150px' }}
                                        cover={<img src={res.image} />}
                                        onClick={() => handleDelete(res.id)}
                                    >
                                        <Meta title={res.name} ></Meta>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    ) : null
                }
            </Container>
        </Content>
    );
};

export default Favorites;
