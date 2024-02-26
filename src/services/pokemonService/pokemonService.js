import { pokemon } from "./api"

export const getAllPokemon = async () => pokemon.get('/pokemon/get-all');

export const getPokemon = async (pokeName) => pokemon.get(`/pokemon/get-pokemon?pokemon=${pokeName}`);