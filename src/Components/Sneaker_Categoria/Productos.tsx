import * as React from 'react';
import { styled } from '@mui/material/styles';
import { CardActionArea, Typography, CardMedia, CardContent, Card, Box, Grid, Stack, Pagination, Button } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import latestImg from '../../assets/img/latestImg.png';

const IconAddCart = styled(Button)(() => ({
    position: 'absolute',
    zIndex: '1',
    top: '25px',
    right: '25px',
    color: 'gray',
    borderRadius: '50%',
    height: '50px',
    minWidth: '50px',
    background: 'white',
    padding: '10px',
    border: '1px solid #E0E0E0',
    '&:hover': {
        color: 'white',
        background: '#10E5A5',
        border: '1px solid #10E5A5',
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

const dataProductos = [
    {
        id: 1,
        nombre: 'Tenis Adidas Last Campus Bad Bunny',
        colores: ['white', 'black', 'pink'],
        precio: 2345.00,
        img: latestImg,
    },
    {
        id: 2,
        nombre: 'Tenis Adidas Last Campus Bad Bunny',
        colores: ['white', 'black', 'pink'],
        precio: 2345.00,
        img: latestImg,
    },
    {
        id: 3,
        nombre: 'Tenis Adidas Last Campus Bad Bunny',
        colores: ['white', 'black', 'pink', '#DE0009'],
        precio: 2345.00,
        img: latestImg,
    },
    {
        id: 4,
        nombre: 'Tenis Adidas Last Campus Bad Bunny',
        colores: ['white', 'black', 'pink'],
        precio: 2345.00,
        img: latestImg,
    },
    {
        id: 5,
        nombre: 'Tenis Adidas Last Campus Bad Bunny',
        colores: ['white', 'black', 'pink', '#FF0000'],
        precio: 2345.00,
        img: latestImg,
    },
    {
        id: 6,
        nombre: 'Tenis Adidas Last Campus Bad Bunny',
        colores: ['white', 'black', 'pink', 'Red'],
        precio: 2345.00,
        img: latestImg,
    },
];

export default function Productos(dataTotal: any) {
    const [page, setPage] = React.useState(1);
    const itemsPerPage = 3; // Número de elementos por página

    const handleChange = (event: any, value: any) => {
        setPage(value);
    };

    const numberOfPages = Math.ceil(dataProductos.length / itemsPerPage);
    const displayedProducts = dataProductos.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <Box>
            {/* Contenedor */}
            <Grid container spacing={2} marginBottom={10}>
                {/* Card */}
                {displayedProducts.map((product, index) => (
                    <Grid key={index} item xs={12} sm={12} md={4} lg={4}>
                        <Card sx={{ background: '#fff', boxShadow: '2px 4px 10px rgba(189, 215, 255, 0.55)' }}>
                            <CardActionArea>
                                <Box sx={{ position: 'relative' }}>
                                    <IconAddCart>
                                        <ShoppingBagOutlinedIcon />
                                    </IconAddCart>
                                    <CardMedia
                                        sx={{ height: '220px', width: '100%', objectFit: 'cover', filter: 'drop-shadow(4px 4px 8px rgba(0,0,0, .3))' }}
                                        component="img"
                                        image={product.img}
                                        alt={product.nombre}
                                    />
                                </Box>
                            </CardActionArea>
                            <CardContent>
                                <Typography gutterBottom component="div" sx={{ fontSize: '18px', fontWeight: 'bold', color: '#717171', marginBottom: '20px' }}>
                                    {product.nombre}
                                </Typography>
                                <Box>
                                    <Typography variant="body2" sx={{ color: '#717171', fontWeight: 'bold', marginBottom: '20px' }}>
                                        Colores
                                    </Typography>
                                    <Stack direction="row" spacing={1}>
                                        {product.colores.map((color, index) => (
                                            <Box key={index} sx={{ width: '20px', height: '20px', borderRadius: '50%', background: color, border: '1px solid #E0E0E0' }}></Box>
                                        ))}
                                    </Stack>
                                </Box>
                                <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: '20px' }}>
                                    ${product.precio}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'center', md: 'flex-end' } }}>
                <Stack spacing={2}>
                    <StylePagination count={numberOfPages} page={page} onChange={handleChange} />
                </Stack>
            </Box>
        </Box>
    );
}
