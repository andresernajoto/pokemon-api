import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { toCapitalize } from "../tools/capitalize";
import { setTypeIcon } from "../utils/pokemonTypes";

const PokemonImage = ({ imageUrl, pokeName, pokeTypeUrl }) => {
    return (
        <Grid container>
            <Card raised={true} sx={{ maxWidth: 250 }}>
                <CardMedia
                    component='img'
                    image={imageUrl}
                    height='250'
                    alt={`Front side sprite of ${toCapitalize(pokeName)}`}
                />
                <CardContent>
                    <CardMedia
                        component='img'
                        image={setTypeIcon[pokeTypeUrl]}
                        height='50'
                    />
                    <Typography
                        variant='h5'
                        align='center'
                    >
                        {toCapitalize(pokeName)}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default PokemonImage;