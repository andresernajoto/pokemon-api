
import { Button, Grid, TextField, Typography } from '@mui/material';
import { getPokemon } from '../services/pokemonService/pokemonService';
import { useState } from 'react';
import PokemonImage from '../components/PokemonImage';

const Home = () => {
    const [pokemon, setPokemon] = useState('');
    const [pokeInfo, setPokeInfo] = useState(null);
    
    const [error, setError] = useState('');

    const clearStates = () => {
        setPokemon('');
        setPokeInfo(null);
    };

    const handleSearchPokemon = (e) => { setPokemon(e.target.value); }
    
    const getPokemonByName = async (pokeName) => {
        try {
            const response = await getPokemon(pokeName.toLowerCase());
    
            if (response.status === 200) {
                setPokeInfo(response.data);
                return response.data
            }
        } catch (e) {
            if (e.response.status === 404) {
                setError('Pokémon não encontrado.');
                console.log(error);
                clearStates();

                return;
            }

            setError('Erro inesperado.')
            console.log(error);
        }
    }

    return (
        <>
            <Grid container>
                <Grid item>
                    <Typography
                        variant='h4'
                    >
                        Pokemon API
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        label='Escolha um Pokemon'
                        onChange={handleSearchPokemon}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button
                        variant='contained'
                        onClick={() => getPokemonByName(pokemon)}
                    >
                        Pesquisar
                    </Button>
                </Grid>
            </Grid>
            { pokeInfo && (
                <PokemonImage
                    imageUrl={pokeInfo['sprites']['front_default']}
                    pokeName={pokeInfo['name']}
                />
            )}
        </>
    );
}

export default Home;