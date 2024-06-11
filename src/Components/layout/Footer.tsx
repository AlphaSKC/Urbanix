import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

import logo from '../../assets/img/logo-negro.png';
import bgFooter from '../../assets/img/bg-topFooter.jpg';

export default function Footer() {
    return (
        <Box component="footer">
            {/* Franja superior */}
            <Box sx={{ backgroundImage: `url(${bgFooter})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link className='bgImgFooter'>
                    <Typography className='txtBgFooter'>Pasos con carácter</Typography>
                </Link>
            </Box>

            {/* Footer */}
            <Box className="bg-third-color" py={4}>
                <Grid container spacing={4} justifyContent="center">
                    {/* Primera columna */}
                    <Grid item xs={12} sm={6} md={6}>
                        <Box textAlign="center">
                            <img src={logo} alt="Logo" style={{ width: '200px' }} />
                            <Typography variant="body2" mt={2}>
                                Cancún, Quintana Roo, México
                            </Typography>
                            <Box mt={2}>
                                {/* Redes sociales */}
                                <Link href="#" color="inherit" mx={1}>
                                    <FacebookIcon
                                        sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText', borderRadius: '50%', padding: '5px' }}
                                    />
                                </Link>
                                <Link href="#" color="inherit" mx={1}>
                                    <InstagramIcon
                                        sx={{ backgroundColor: '#EA4C89', color: 'primary.contrastText', borderRadius: '50%', padding: '5px' }}
                                    />
                                </Link>
                                <Link href="#" color="inherit" mx={1}>
                                    <XIcon
                                        sx={{ backgroundColor: 'black', color: 'primary.contrastText', borderRadius: '50%', padding: '5px' }}
                                    />
                                </Link>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Segunda columna */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom className='title-footer'>
                            Shop
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            <Link href="#" color="inherit" className='links-title'>Site Map</Link>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            <Link href="#" color="inherit" className='links-title'>Regístrate</Link>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            <Link href="#" color="inherit" className='links-title'>Iniciar Sesión</Link>
                        </Typography>
                    </Grid>

                    {/* Tercera columna */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom className='title-footer'>
                            Nosotros
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            <Link href="#" color="inherit" className='links-title'>Contacto</Link>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            <Link href="#" color="inherit" className='links-title'>¿Quiénes somos?</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            {/* Franja inferior */}
            <Box className="bg-white" py={2}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <Typography align="center">
                            © 2024 Orejas Inc. Todos los derechos reservados.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography align="center">
                            <Link className='links-title' href="#" color="inherit">Términos y Condiciones</Link> | <Link className='links-title' href="#" color="inherit">Aviso de Privacidad</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

