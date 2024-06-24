import { Box, Container, Grid, Typography } from "@mui/material";
import Productos from "./Productos";
import Filtros from "./Filtros";

export default function HomeCategoria() {
    return (
        <Container sx={{ marginBottom: '50px' }}>
            <Grid container xs={12} sm={12} md={9} lg={9} display={'flex'} justifyContent={'center'} marginTop={3}>
                <Box>
                    <Typography fontSize={30} fontWeight={600}>Calzado en LifeStyle</Typography>
                    <Typography fontSize={15} fontWeight={400}>Se encontraron 120 productos</Typography>
                </Box>
            </Grid>
            <Grid container spacing={2} marginTop={3}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Filtros />
                </Grid>
                <Grid item xs={12} sm={12} md={9} lg={9}>
                    <Productos />
                </Grid>
            </Grid>
        </Container>
    );
}
