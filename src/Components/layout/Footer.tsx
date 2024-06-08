import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';

export default function Footer() {
    return (
        <Box component="footer">
            {/* Franja superior */}
            <Box className="bg-second-color" color="primary.contrastText" py={2}>
                <Typography align="center">Pasos con carácter</Typography>
            </Box>

            {/* Footer */}
            <Box className="bg-third-color" py={4}>
                <Grid container spacing={4} justifyContent="center">
                    {/* Primera columna */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box textAlign="center">
                            <img src="/logo.png" alt="Logo" style={{ width: '150px' }} />
                            <Typography variant="body2" mt={2}>
                                Información adicional de la empresa
                            </Typography>
                            <Box mt={2}>
                                {/* Redes sociales */}
                                <Link href="#" color="inherit" mx={1}>
                                    <img src="/icon-facebook.png" alt="Facebook" style={{ width: '24px' }} />
                                </Link>
                                <Link href="#" color="inherit" mx={1}>
                                    <img src="/icon-twitter.png" alt="Twitter" style={{ width: '24px' }} />
                                </Link>
                                <Link href="#" color="inherit" mx={1}>
                                    <img src="/icon-instagram.png" alt="Instagram" style={{ width: '24px' }} />
                                </Link>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Segunda columna */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Menú 1
                        </Typography>
                        <Typography variant="body2">
                            <Link href="#" color="inherit">Redireccionamiento 1</Link>
                        </Typography>
                        <Typography variant="body2">
                            <Link href="#" color="inherit">Redireccionamiento 2</Link>
                        </Typography>
                        <Typography variant="body2">
                            <Link href="#" color="inherit">Redireccionamiento 3</Link>
                        </Typography>
                    </Grid>

                    {/* Tercera columna */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Menú 2
                        </Typography>
                        <Typography variant="body2">
                            <Link href="#" color="inherit">Redireccionamiento 1</Link>
                        </Typography>
                        <Typography variant="body2">
                            <Link href="#" color="inherit">Redireccionamiento 2</Link>
                        </Typography>
                        <Typography variant="body2">
                            <Link href="#" color="inherit">Redireccionamiento 3</Link>
                        </Typography>
                    </Grid>

                    {/* Cuarta columna */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Menú 3
                        </Typography>
                        <Typography variant="body2">
                            <Link href="#" color="inherit">Redireccionamiento 1</Link>
                        </Typography>
                        <Typography variant="body2">
                            <Link href="#" color="inherit">Redireccionamiento 2</Link>
                        </Typography>
                        <Typography variant="body2">
                            <Link href="#" color="inherit">Redireccionamiento 3</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            {/* Franja inferior */}
            <Box className="bg-main-color" color="primary.contrastText" py={2}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <Typography align="center">
                            © 2024 Mi Empresa. Todos los derechos reservados.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography align="center">
                            <Link href="#" color="inherit">Términos y Condiciones</Link> | <Link href="#" color="inherit">Aviso de Privacidad</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

