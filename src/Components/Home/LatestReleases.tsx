import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { CardActionArea, Typography, CardMedia, CardContent, Card, Box, Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import latestImg from '../../assets/img/latestImg.png';
import poster1 from '../../assets/img/poster1.jpg';
import poster2 from '../../assets/img/poster2.jpg';


const IconFav = styled(FavoriteBorderIcon)(() => ({
    position: 'absolute',
    top: '25px',
    zIndex: '1',
    right: '25px',
    color: 'gray',
    borderRadius: '50%',
    background: 'white',
    padding: '10px',
    border: '1px solid #E0E0E0',
    '&:hover': {
        color: 'red',
        border: '1px solid red',
    },
}));

export default function LatestReleases() {
    return (
        <Box sx={{ margin: '50px 0', position: 'relative' }}>
            {/* Titulo */}
            <Box>
                <Typography className='title-section'>
                    Últimos lanzamientos
                </Typography>
            </Box>
            {/* Contenedor */}
            <Grid container spacing={2}>
                {/* Poster */}
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <CardActionArea sx={{ height: '100%' }}>
                        <CardMedia
                            sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
                            component="img"
                            image={poster1}
                            alt="Poster 1"
                        />
                    </CardActionArea>
                </Grid>
                {/* Card */}
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Card sx={{ background: '#D3FBEF' }}>
                        <CardActionArea>
                            <Box sx={{ position: 'relative' }}>
                                <IconFav />
                                <CardMedia
                                    sx={{ height: '220px', width: '100%', objectFit: 'cover', filter: 'drop-shadow(4px 4px 8px rgba(0,0,0, .3))' }}
                                    component="img"
                                    image={latestImg}
                                    alt="Tenis Adidas Last Forum Bad Bunny"
                                />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div" sx={{ fontSize: '18px', fontWeight: 'bold', color: '#717171', marginBottom: '20px' }}>
                                Tenis Adidas Last Campus Bad Bunny
                            </Typography>
                            <Box>
                                <Typography variant="body2" sx={{ color: '#717171', fontWeight: 'bold', marginBottom: '20px' }}>
                                    Colores
                                </Typography>
                                <Box>
                                    <Box sx={{ display: 'flex', gap: '10px' }}>
                                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', background: '#FFD700' }}></Box>
                                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', background: '#000000' }}></Box>
                                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', background: '#FFFFFF' }}></Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: '20px' }}>
                                $1,249 MXN
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Card sx={{ background: '#BDD7FF' }}>
                        <CardActionArea>
                            <Box sx={{ position: 'relative' }}>
                                <IconFav />
                                <CardMedia
                                    sx={{ height: '220px', width: '100%', objectFit: 'cover', filter: 'drop-shadow(4px 4px 8px rgba(0,0,0, .3))' }}
                                    component="img"
                                    image={latestImg}
                                    alt="Tenis Adidas Last Forum Bad Bunny"
                                />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div" sx={{ fontSize: '18px', fontWeight: 'bold', color: '#717171', marginBottom: '20px' }}>
                                Tenis Adidas Last Campus Bad Bunny
                            </Typography>
                            <Box>
                                <Typography variant="body2" sx={{ color: '#717171', fontWeight: 'bold', marginBottom: '20px' }}>
                                    Colores
                                </Typography>
                                <Box>
                                    <Box sx={{ display: 'flex', gap: '10px' }}>
                                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', background: '#FFD700' }}></Box>
                                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', background: '#000000' }}></Box>
                                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', background: '#FFFFFF' }}></Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: '20px' }}>
                                $1,249 MXN
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Card sx={{ background: '#D3FBEF' }}>
                        <CardActionArea>
                            <Box sx={{ position: 'relative' }}>
                                <IconFav />
                                <CardMedia
                                    sx={{ height: '220px', width: '100%', objectFit: 'cover', filter: 'drop-shadow(4px 4px 8px rgba(0,0,0, .3))' }}
                                    component="img"
                                    image={latestImg}
                                    alt="Tenis Adidas Last Forum Bad Bunny"
                                />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div" sx={{ fontSize: '18px', fontWeight: 'bold', color: '#717171', marginBottom: '20px' }}>
                                Tenis Adidas Last Campus Bad Bunny
                            </Typography>
                            <Box>
                                <Typography variant="body2" sx={{ color: '#717171', fontWeight: 'bold', marginBottom: '20px' }}>
                                    Colores
                                </Typography>
                                <Box>
                                    <Box sx={{ display: 'flex', gap: '10px' }}>
                                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', background: '#FFD700' }}></Box>
                                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', background: '#000000' }}></Box>
                                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', background: '#FFFFFF' }}></Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: '20px' }}>
                                $1,249 MXN
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Poster */}
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <CardActionArea sx={{ height: '100%' }}>
                        <CardMedia
                            sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
                            component="img"
                            image={poster2}
                            alt="Poster 2"
                        />
                    </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Card sx={{ background: '#BDD7FF' }}>
                        <CardActionArea>
                            <Box sx={{ position: 'relative' }}>
                                <IconFav />
                                <CardMedia
                                    sx={{ height: '220px', width: '100%', objectFit: 'cover', filter: 'drop-shadow(4px 4px 8px rgba(0,0,0, .3))' }}
                                    component="img"
                                    image={latestImg}
                                    alt="Tenis Adidas Last Forum Bad Bunny"
                                />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div" sx={{ fontSize: '18px', fontWeight: 'bold', color: '#717171', marginBottom: '20px' }}>
                                Tenis Adidas Last Campus Bad Bunny
                            </Typography>
                            <Box>
                                <Typography variant="body2" sx={{ color: '#717171', fontWeight: 'bold', marginBottom: '20px' }}>
                                    Colores
                                </Typography>
                                <Box>
                                    <Box sx={{ display: 'flex', gap: '10px' }}>
                                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', background: '#FFD700' }}></Box>
                                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', background: '#000000' }}></Box>
                                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', background: '#FFFFFF' }}></Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: '20px' }}>
                                $1,249 MXN
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Card sx={{ background: '#D3FBEF' }}>
                        <CardActionArea>
                            <Box sx={{ position: 'relative' }}>
                                <IconFav />
                                <CardMedia
                                    sx={{ height: '220px', width: '100%', objectFit: 'cover', filter: 'drop-shadow(4px 4px 8px rgba(0,0,0, .3))' }}
                                    component="img"
                                    image={latestImg}
                                    alt="Tenis Adidas Last Forum Bad Bunny"
                                />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div" sx={{ fontSize: '18px', fontWeight: 'bold', color: '#717171', marginBottom: '20px' }}>
                                Tenis Adidas Last Campus Bad Bunny
                            </Typography>
                            <Box>
                                <Typography variant="body2" sx={{ color: '#717171', fontWeight: 'bold', marginBottom: '20px' }}>
                                    Colores
                                </Typography>
                                <Box>
                                    <Box sx={{ display: 'flex', gap: '10px' }}>
                                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', background: '#FFD700' }}></Box>
                                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', background: '#000000' }}></Box>
                                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', background: '#FFFFFF' }}></Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: '20px' }}>
                                $1,249 MXN
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Card sx={{ background: '#BDD7FF' }}>
                        <CardActionArea>
                            <Box sx={{ position: 'relative' }}>
                                <IconFav />
                                <CardMedia
                                    sx={{ height: '220px', width: '100%', objectFit: 'cover', filter: 'drop-shadow(4px 4px 8px rgba(0,0,0, .3))' }}
                                    component="img"
                                    image={latestImg}
                                    alt="Tenis Adidas Last Forum Bad Bunny"
                                />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div" sx={{ fontSize: '18px', fontWeight: 'bold', color: '#717171', marginBottom: '20px' }}>
                                Tenis Adidas Last Campus Bad Bunny
                            </Typography>
                            <Box>
                                <Typography variant="body2" sx={{ color: '#717171', fontWeight: 'bold', marginBottom: '20px' }}>
                                    Colores
                                </Typography>
                                <Box>
                                    <Box sx={{ display: 'flex', gap: '10px' }}>
                                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', background: '#FFD700' }}></Box>
                                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', background: '#000000' }}></Box>
                                        <Box sx={{ height: '30px', width: '30px', borderRadius: '50%', background: '#FFFFFF' }}></Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: '20px' }}>
                                $1,249 MXN
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
