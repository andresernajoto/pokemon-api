
import { Button, Grid, TextField, Typography } from '@mui/material';
import { getPokemon } from '../services/pokemonService/pokemonService';
import { useState } from 'react';
import PokemonImage from '../components/PokemonImage';
import Notifications from '../components/Notifications';

const Home = () => {
    // handle pokemon responses
    const [pokemon, setPokemon] = useState('');
    const [pokeInfo, setPokeInfo] = useState(null);
    
    // handle errors
    const [error, setError] = useState('');
    
    // handle notifications
    const [severity, setSeverity] = useState('');
    const [handleOpen, setHandleOpen] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') { return; }
        setHandleOpen(false);
    }

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
                setSeverity('warning');
                setHandleOpen(true);
                clearStates();

                return;
            }

            setError('Erro inesperado.')
            setSeverity('error');
            setHandleOpen(true);
            clearStates();
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
            { error && (
                <Notifications
                    open={handleOpen}
                    onClose={handleClose}
                    severity={severity}
                    message={error}
                />
            )}
        </>
    );
}

export default Home;