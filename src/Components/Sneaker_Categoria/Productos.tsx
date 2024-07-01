import * as React from 'react';
import { useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';
import { CardActionArea, Typography, CardMedia, CardContent, Card, Box, Grid, Stack, Pagination, Button } from '@mui/material';
import { getProducts } from '../../services/ProductServices';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';


import latestImg from '../../assets/img/latestImg.png';

interface Products {
    pkProducto: number;
    marca: string;
    modelo: string;
    categoria: string;
    color: string;
    size: number;
    precio: number;
    genero: string;
}


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
        color: 'black',
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

export default function Productos(dataTotal: any) {

    const [sneakers, setSneaker] = useState<Products[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await getProducts();
            setSneaker(data);
        } catch (e) {
            console.error(e);
        }
    };

    const [page, setPage] = React.useState(1);
    const itemsPerPage = 12; // Número de elementos por página

    const handleChange = (event: any, value: any) => {
        setPage(value);
    };

    const numberOfPages = Math.ceil(sneakers.length / itemsPerPage);
    const displayedProducts = sneakers.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <Box>
            {/* Contenedor */}
            <Grid container spacing={2} marginBottom={10}>
                {/* Card */}
                {displayedProducts.map((product, index) => (
                    <Grid key={index} item xs={12} sm={12} md={4} lg={4}>
                        <Card sx={{ background: '#fff', boxShadow: '2px 4px 10px rgba(189, 215, 255, 0.55)' }}>
                            <CardActionArea href='/detalle'>
                                <Box sx={{ position: 'relative' }}>
                                    <IconAddCart>
                                        <LocalMallOutlinedIcon />
                                    </IconAddCart>
                                    <CardMedia
                                        sx={{ height: '220px', width: '100%', objectFit: 'cover', filter: 'drop-shadow(4px 4px 8px rgba(0,0,0, .3))' }}
                                        component="img"
                                        image={latestImg}
                                        alt={product.marca + ' ' + product.modelo}
                                    />
                                </Box>
                            </CardActionArea>
                            <CardContent>
                                <Typography gutterBottom component="div" sx={{ fontSize: '18px', fontWeight: 'bold', color: '#717171', marginBottom: '20px' }}>
                                    {product.marca + ' ' + product.modelo}
                                </Typography>
                                <Box>
                                    <Typography variant="body2" sx={{ color: '#717171', fontWeight: 'bold', marginBottom: '20px' }}>
                                        Colores
                                    </Typography>
                                    <Stack direction="row" spacing={1}>
                                        {/* {product.colores.map((color, index) => (
                                            <Box key={index} sx={{ width: '20px', height: '20px', borderRadius: '50%', background: color, border: '1px solid #E0E0E0' }}></Box>
                                        ))} */}
                                        <Box sx={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px solid #E0E0E0', background: product.color }}></Box>
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
