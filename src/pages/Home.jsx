
import { Button, Grid, TextField, Typography } from '@mui/material';
import { getPokemon } from '../services/pokemonService/pokemonService';
import { useState } from 'react';

const Home = () => {
    const [pokemon, setPokemon] = useState('');

    const handleSearchPokemon = (e) => { setPokemon(e.target.value); console.log(pokemon) }
    
    const getPokemonByName = async (pokeName) => {
        try {
            const response = await getPokemon(pokeName);
            console.log('STATUS', response)
    
            if (response.status === 200) {
                return console.log('POKEMON', response.data)
            }
        } catch {
            return console.log('not find')
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
        </>
    );
}

export default Home