import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { toCapitalize } from "../tools/capitalize";

const PokemonImage = ({ imageUrl, pokeName }) => {
    return (
        <Card raised={true} sx={{ maxWidth: 250 }}>
            <CardMedia
                component='img'
                image={imageUrl}
                height='250'
            />
            <CardContent>
                <Typography
                    variant='h5'
                    align='center'
                >
                    {toCapitalize(pokeName)}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default PokemonImage;