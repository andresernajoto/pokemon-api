import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { toCapitalize } from "../tools/capitalize";

const PokemonImage = ({ imageUrl, pokeName }) => {
    return (
        <Card
            raised={true}
            sx={{
                maxWidth: 250,
                borderRadius: '1rem',
                padding: '1rem 1rem 0 1rem'
            }}
        >
            <CardMedia
                component='img'
                image={imageUrl}
                height='250'
            />
            <CardContent
                sx={{
                    backgroundColor: '#e5e5e5',
                    width: '100%',
                    marginLeft: '-6.5%'
                }}
            >
                <Typography
                    variant='h6'
                    align='center'
                    fontWeight='bold'
                >
                    {toCapitalize(pokeName)}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default PokemonImage;