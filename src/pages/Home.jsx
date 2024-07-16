import { Content } from './HomeStyle';
import { useEffect, useState } from "react";
import { getRandom } from '../services/api';
import { Card } from 'antd';
const { Meta } = Card

const Home = () => {

    const [results, setResults] = useState([]);

    const pokeRandom = () => {
        const random = Math.floor(Math.random() * 151) + 1;
        getRandom(random).then((data) => {
            if (data) {
                setResults(data)
            }
        })
    }

    useEffect(() => {
        pokeRandom()
    }, [])

    return (
        <>
            <Content>

                <Card
                    hoverable
                    style={{ width: '256px', margin: '1rem', textAlign: 'center' }}
                    cover={<img alt="example" src={results.sprites?.other['official-artwork'].front_default} />}
                >
                    <Meta title={results.name} />
                </Card>

                <button
                    onClick={pokeRandom}
                >
                    Obtener random
                </button>


            </Content>
        </>
    )
}

export default Home;