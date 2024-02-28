
import { Button, Grid, TextField, Typography } from '@mui/material';
import { getPokemon } from '../services/pokemonService/pokemonService';
import { useState } from 'react';
import PokemonImage from '../components/PokemonImage';
import { setTypeIcon } from '../utils/pokemonTypes';

const Home = () => {
    const [pokemon, setPokemon] = useState('');
    const [pokeInfo, setPokeInfo] = useState(null);
    const [pokeType, setPokeType] = useState('');

    const handleSearchPokemon = (e) => { setPokemon(e.target.value); }
    
    const getPokemonByName = async (pokeName) => {
        try {
            const response = await getPokemon(pokeName.toLowerCase());
    
            if (response.status === 200) {
                setPokeInfo(response.data);
                setPokeType(response.data['types'][0]['type']['name'])

                return response.data
            }
        } catch (error) {
            return console.log('Error: ', error)
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
                    pokeTypeUrl={pokeType in setTypeIcon ? pokeType : null}
                />
            )}
        </>
    );
}

export default Home