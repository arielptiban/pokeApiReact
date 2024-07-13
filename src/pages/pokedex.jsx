import React from 'react';
import { Content, Button, ButtonContainer } from './Pokedex';
import { useState, useEffect } from 'react';
import { getData, getInfo } from '../services/api';
import { Col, Row, Card, Pagination } from 'antd';



const { Meta } = Card

const pokedex = () => {

    const [result, setResults] = useState([]);
    const [hab, setHab] = useState([]);
    const [poke, setPoke] = useState('');
    const [page, setPage] = useState({});

    const urlInit = 'https://pokeapi.co/api/v2/pokemon/'

    useEffect(() => {
        getData(urlInit).then((data) => {
            setResults(data.results);
            setPage(data);
        })
    }, [])

    const handleClick = (poke) => {
        getInfo(poke).then((data) => {
            const abilities = data.map(item => item.ability.name);
            setHab(abilities);
            setPoke(poke);
        })
    }


    const handleNext = () => {
        getData(page.next).then((data) => {
            setResults(data.results);
            setPage(data);
        })
    }
    const handlePrev = () => {
        getData(page.previous).then((data) => {
            setResults(data.results);
            setPage(data);
        })
    }

    return (
        <Content>
            <ButtonContainer>
                {
                    page.previous ? <Button onClick={handlePrev}>Prev</Button> : null
                }
                {
                    page.next ? <Button onClick={handleNext}>Next</Button> : null
                }

            </ButtonContainer>

            <Row>
                {
                    result.map((item, index) =>
                    (
                        <Col xs={6} key={index}>
                            <Card
                                hoverable
                                style={{ width: 'auto', margin: '1rem', textAlign: 'center' }}
                                onClick={() => { handleClick(item.name) }}
                            >
                                <Meta title={item.name}></Meta>
                            </Card>
                        </Col>

                    ))
                }
            </Row>

            <Row>
                <Col>
                    {poke && (

                        <Card
                            hoverable
                            style={{ width: 'auto', margin: '1rem', textAlign: 'center' }}
                            onClick={() => { handleClick(item.name) }}
                        >

                            <Meta
                                title={`Habilidades de: ${poke}`}
                                description={
                                    hab.map((item, index) =>
                                    (
                                        <p key={index}>{item}</p>
                                    ))
                                }
                            >
                            </Meta>
                        </Card>

                    )}
                </Col>
            </Row>


        </Content>

    );
};

export default pokedex;