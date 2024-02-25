import { pokemon } from "./api"

export const getAllPokemon = async () => pokemon.get('/pokemon/get-all');

export const getPokemon = async (pokemon) => pokemon.get(`/pokemon/get-pokemon?pokemon=${pokemon}`);