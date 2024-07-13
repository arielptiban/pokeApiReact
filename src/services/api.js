import axios from 'axios'

export const getData = async (url) => {
    const response = await axios.get(url)
    return response.data
}

export const getInfo = async (poke) => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + poke);
        return response.data.abilities
    }
    catch (error) {
        console.log(error)
        return []
    }

}