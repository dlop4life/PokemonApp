import Pokemon from "../model/Pokemon";
import axios from 'axios';

const baseUrl = 'http://localhost:8000'

export class PokemonService {

    fetchPokemonByID = async (id: number) => {
        let result;
        try {
            result = await axios.get(baseUrl+'/fetchById');
        } catch (error) {
            console.log("Fetch By ID Error: " + error)
        }
        return result;
    }

}