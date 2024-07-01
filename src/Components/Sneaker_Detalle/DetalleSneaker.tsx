import * as React from 'react';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, Stack, ToggleButton, ToggleButtonGroup, Typography, colors, styled } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

import latestImg from '../../assets/img/latestImg.png';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../../assets/css/Swiper.module.css';

const BtnAddCart = styled(Button)(() => ({
    background: '#10E5A5',
    boxShadow: '1px 4px 5px rgba(0, 0, 0, 0.15)',
    borderRadius: '50px',
    color: 'black',
    textTransform: 'none',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '13px',
    fontWeight: '600',
    marginTop: '20px',
    padding: '15px 30px',
    float: 'right',
    '&:hover': {
        background: '#fff',
        color: 'gray',
    }
}));

const BtnSize = styled(ToggleButton)(() => ({
    color: '#7e7e7e',
    border: '1px solid #e1e1e1',
    borderRadius: '15px',
    padding: '10px 20px',
    margin: '5px',
    '&.Mui-selected': {
        color: '#fff',
        background: '#10E5A5',
        '&:hover': {
            background: 'rgba(16, 229, 165, 0.8)',
        }
    },
}));

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

const BtnCategory = styled(Button)(() => ({
    color: '#7e7e7e',
    background: '#fff',
    borderRadius: '30px',
    padding: '10px 20px',
    margin: '5px',
    textTransform: 'none',
    border: '1px solid #7e7e7e',
    boxShadow: '1px 4px 5px rgba(0, 0, 0, 0.15)',
    '&:hover': {
        background: 'rgba(16, 229, 165, 0.8)',
        border: '1px solid #10E5A5',
        color: '#000',
    }
}));

export default function DetalleSneaker() {

    const [alignment, setAlignment] = React.useState('25');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };

    return (
        <Container sx={{ marginBottom: '50px' }}>
            {/* --- Galería, Formulario & Detalles --- */}
            <Grid container spacing={2} marginTop={3} marginBottom={3}>
                {/* Galería */}
                <Grid item xs={12} sm={12} md={8} lg={8} sx={{ background: 'red' }}>
                    <Box>
                        <Typography>Galeria</Typography>
                    </Box>
                </Grid>
                {/* Formulario */}
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Box sx={{ background: '#f8f8f8', padding: '20px', borderRadius: '10px', boxShadow: '2px 5px 10px #e1e1e1' }}>
                        <Grid container spacing={2} marginBottom={3}>
                            {/* Reviews & Score */}
                            <Grid item xs={12} sm={12} md={6} lg={6} display={'flex'} flexWrap={'wrap'} alignItems={'center'}>
                                <StarIcon
                                    sx={{ color: '#FBBF24', fontSize: 22 }}
                                />
                                <Typography fontSize={18} fontWeight={600}>4.9</Typography>
                                <Typography marginLeft={1} fontSize={14} color={'#4B5563'}>142 Reviews</Typography>
                            </Grid>
                            {/* Price */}
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Typography textAlign={'right'} fontWeight={600} fontSize={20}>$ 4,220.00</Typography>
                                <Typography textAlign={'right'}>MXN</Typography>
                            </Grid>
                            {/* Size */}
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Box>
                                    <Typography fontWeight={'bold'} marginBottom={2} marginTop={3}>Selecciona tu talla</Typography>
                                    <ToggleButtonGroup
                                        value={alignment}
                                        exclusive
                                        onChange={handleChange}
                                        aria-label="Size"
                                        sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
                                    >
                                        <BtnSize value="25">25 CM</BtnSize>
                                        <BtnSize value="25.5">25.5 CM</BtnSize>
                                        <BtnSize value="26">26 CM</BtnSize>
                                        <BtnSize value="26.5">26.5 CM</BtnSize>
                                        <BtnSize value="27">27 CM</BtnSize>
                                        <BtnSize value="27.5">27.5 CM</BtnSize>
                                        <BtnSize value="28">28 CM</BtnSize>
                                        <BtnSize value="28.5">28.5 CM</BtnSize>
                                        <BtnSize value="29">29 CM</BtnSize>
                                        <BtnSize value="29.5">29.5 CM</BtnSize>
                                    </ToggleButtonGroup>
                                </Box>
                                <BtnAddCart>
                                    <AddShoppingCartOutlinedIcon />
                                    Añadir al carrito
                                </BtnAddCart>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                {/* Detalles */}
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />
                    <Box marginBottom={3}>
                        <Typography fontSize={24} fontWeight={600} marginBottom={2}>Nombre del Sneaker</Typography>
                        <Typography fontSize={16} color={'#4B5563'}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime ea omnis earum!
                            Quod dolores possimus repellat, at nisi dolore assumenda minima? Nulla ratione mollitia,
                            nam sunt fuga suscipit doloremque velit!
                        </Typography>
                    </Box>
                    <Box marginBottom={3}>
                        <Typography fontSize={20} fontWeight={600} marginBottom={2}>Beneficios</Typography>
                        <Typography fontSize={16} color={'#4B5563'}>
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>Maxime ea omnis earum quod dolores possimus repellat.</li>
                                <li>At nisi dolore assumenda minima nulla ratione mollitia.</li>
                                <li>Nam sunt fuga suscipit doloremque velit.</li>
                            </ul>
                        </Typography>
                    </Box>
                    <Box marginBottom={3}>
                        <Typography fontSize={20} fontWeight={600} marginBottom={2}>Datos del producto</Typography>
                        <Typography fontSize={16} color={'#4B5563'}>
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>Maxime ea omnis earum quod dolores possimus repellat.</li>
                                <li>At nisi dolore assumenda minima nulla ratione mollitia.</li>
                                <li>Nam sunt fuga suscipit doloremque velit.</li>
                            </ul>
                        </Typography>
                    </Box>
                    <Box marginBottom={3}>
                        <Typography fontSize={20} fontWeight={600} marginBottom={2}>Categorías</Typography>
                        <BtnCategory href='/categoria'>
                            <AutoAwesomeOutlinedIcon sx={{ marginRight: '5px' }} /> LifeStyle
                        </BtnCategory>
                        <BtnCategory href='/categoria'>
                            <AutoAwesomeOutlinedIcon sx={{ marginRight: '5px' }} /> Air Jordan
                        </BtnCategory>
                    </Box>
                </Grid>
            </Grid>
            {/* --- Sneakers Similares --- */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={10} lg={10}>
                    <Typography fontSize={30} fontWeight={600} marginBottom={2}>También podría gustarte</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={2} lg={2} position={'relative'} marginBottom={2}>
                    <div className={styles.NextReleated}>
                        <ArrowForwardIosIcon />
                    </div>
                    <div className={styles.PrevReleated}>
                        <ArrowBackIosNewIcon />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} marginBottom={4}>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        navigation={{ nextEl: `.${styles.NextReleated}`, prevEl: `.${styles.PrevReleated}` }}
                        modules={[Navigation]}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        {dataProductos.map((product, index) => (
                            <SwiperSlide key={index}>
                                <Card sx={{ background: '#fff', boxShadow: '2px 4px 10px rgba(189, 215, 255, 0.55)' }}>
                                    <CardActionArea href='/detalle'>
                                        <Box sx={{ position: 'relative' }}>
                                            <IconAddCart>
                                                <LocalMallOutlinedIcon />
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Grid>
            </Grid>
        </Container>
    );
}
