import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { CardActionArea, Typography, CardMedia, CardContent, Card, Box, Grid, Stack, Pagination } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import latestImg from '../../assets/img/latestImg.png';

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

const StylePagination = styled(Pagination)(() => ({
    '& .MuiPaginationItem-root': {
        fontFamily: 'Poppins',
        borderRadius: '10px',
        color: '#717171',
    },
    '& .MuiPaginationItem-page.Mui-selected': {
        backgroundColor: '#10E5A5',
        color: 'white',
    },
}));

export default function Productos() {
    return (
        <Box>
            {/* Contenedor */}
            <Grid container spacing={2} marginBottom={10}>
                {/* Card */}
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Card sx={{ background: '#fff', boxShadow:'2px 4px 10px rgba(189, 215, 255, 0.55)' }}>
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
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Card sx={{ background: '#fff', boxShadow:'2px 4px 10px rgba(189, 215, 255, 0.55)' }}>
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
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Card sx={{ background: '#fff', boxShadow:'2px 4px 10px rgba(189, 215, 255, 0.55)' }}>
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
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'center', md: 'flex-end' } }}>
                <Stack spacing={2}>
                    <StylePagination count={10} />
                </Stack>
            </Box>
        </Box>
    );
}
