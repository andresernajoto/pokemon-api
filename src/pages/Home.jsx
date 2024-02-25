import { Button, Grid, TextField, Typography } from '@mui/material'

const Home = () => {
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
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button
                        variant='contained'
                    >
                        Pesquisar
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

export default Home