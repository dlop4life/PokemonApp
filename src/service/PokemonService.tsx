import Pokemon from "../model/Pokemon";
import axios from 'axios';

const baseUrl = 'http://localhost:8000'

export class PokemonService {

    fetchPokemonByID = async (id: number) => {
        let result;
        try {
            result = await await axios.get(baseUrl+'/fetchById', {
                params: {
                    id
                }
            });
        } catch (error) {
            console.log("Fetch By ID Error: " + error)
        }
        return result;
    }

    fetchPokemonByName = async (name: string) => {
        let result;
        try {
            result = await axios.get(baseUrl+'/fetchByName', {
                params: {
                    name
                }
            });
        } catch (error) {
            console.log("Fetch By ID Error: " + error)
        }
        return result;
    }

    fetchPokemonList = async (id: number) => {
        let result;
        try {
            result = await axios.get(baseUrl+'/fetchPokemonList', {
                params: {
                    id
                }
            });
        } catch (error) {
            console.log("Fetch By ID Error: " + error)
        }
        return result;
    }

}