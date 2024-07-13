import { Link } from "react-router-dom";
import { Content, Button } from './HomeStyle';


const Home = () => (
    <Content>
        <h1>Examen REACT</h1>
        <p>Este es el examen de React - Consumir API Pokemon</p>
        <Button to="/pokedex">
            Acceder
        </Button>

    </Content>
)

export default Home;