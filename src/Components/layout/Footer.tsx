import React from 'react';
import { Box, Grid, Typography, Link, Divider, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

import logo from '../../assets/img/logo-blanco.png';

export default function Footer() {
    return (
        <Box component="footer">
            {/* Waves */}
            <Box className="boxWave">
                <Box className="wave wave1"></Box>
                <Box className="wave wave2"></Box>
                <Box className="wave wave3"></Box>
                <Box className="wave wave4"></Box>
            </Box>

            {/* Footer */}
            <Box className="bg-main-color" py={4}>
                <Grid container spacing={4} justifyContent="center">
                    {/* Logo & Social media */}
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Box textAlign="center">
                            <img src={logo} alt="Logo" style={{ width: '200px' }} />
                            <Box>
                                {/* Redes sociales */}
                                <Link href="#" color="inherit" mx={1}>
                                    <FacebookIcon
                                        sx={{ backgroundColor: 'none', color: 'primary.contrastText', borderRadius: '50%', padding: '5px' }}
                                    />
                                </Link>
                                <Link href="#" color="inherit" mx={1}>
                                    <InstagramIcon
                                        sx={{ backgroundColor: 'none', color: 'primary.contrastText', borderRadius: '50%', padding: '5px' }}
                                    />
                                </Link>
                                <Link href="#" color="inherit" mx={1}>
                                    <XIcon
                                        sx={{ backgroundColor: 'none', color: 'primary.contrastText', borderRadius: '50%', padding: '5px' }}
                                    />
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    {/* Menu */}
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
                            <Typography variant="body2" gutterBottom>
                                <Link href="#" color="primary.contrastText" className='links-title'>Site Map</Link>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                <Link href="#" color="primary.contrastText" className='links-title'>Regístrate</Link>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                <Link href="#" color="primary.contrastText" className='links-title'>Iniciar Sesión</Link>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                <Link href="#" color="primary.contrastText" className='links-title'>Contacto</Link>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                <Link href="#" color="primary.contrastText" className='links-title'>¿Quiénes somos?</Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Franja inferior */}
            <Box className="bg-main-color" py={2}>
                <Container>
                    <Divider sx={{ background: 'white', marginBottom:'10px' }} />
                </Container>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <Typography align="center" fontSize={13} color="primary.contrastText">
                            © 2024 Orejas Inc. Todos los derechos reservados.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography align="center" fontSize={13} color="primary.contrastText">
                            <Link className='links-title' href="#" color="inherit">Términos y Condiciones</Link> | <Link className='links-title' href="#" color="inherit">Aviso de Privacidad</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

