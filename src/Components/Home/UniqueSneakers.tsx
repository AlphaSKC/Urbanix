import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { CardActionArea, Typography, CardMedia, CardContent, Card, Box, Grid, Link, Button } from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../../assets/css/Swiper.module.css';

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

export default function UniqueSneakers() {
    return (
        <Box sx={{ margin: '50px 0', position: 'relative' }}>
            <Grid container alignItems="center">
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography className='title-section'>
                        Sneakers únicos
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} textAlign="end">
                    <Link href="/categoria" className='links-title' color='inherit'>
                        Ver todos
                        <ArrowForwardIosIcon
                        sx={{ fontSize: 'small', marginLeft: '5px'}}
                        />
                    </Link>
                </Grid>
            </Grid>
            <div className={styles.ButtonNext}>
                <ArrowForwardIosIcon />
            </div>
            <div className={styles.ButtonPrev}>
                <ArrowBackIosNewIcon />
            </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                navigation={{ nextEl: `.${styles.ButtonNext}`, prevEl: `.${styles.ButtonPrev}` }}
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
                <SwiperSlide >
                    <Card>
                        <CardActionArea>
                            <Box sx={{ position: 'relative' }}>
                                <IconAddCart>
                                        <LocalMallOutlinedIcon />
                                    </IconAddCart>
                                <CardMedia
                                    sx={{ height: '300px', width: '100%', objectFit: 'cover' }}
                                    component="img"
                                    image="https://www.innvictus.com/medias/tenis-adidas-last-forum-bad-bunny-in-HQ2153-1.jpg?context=bWFzdGVyfGltYWdlc3wxODYzM3xpbWFnZS9qcGVnfGltYWdlcy9oNjEvaGFiLzExNDEwMDM0Mjk0ODE0LmpwZ3w2ZTYwMGEwY2JmYWNjN2RkMjdmNDg0YmIxZmZhZDkwYjM1MjE1YmVlMzZlZTVkY2RiOTRhZTJmMDlhNzk2ZDEw"
                                    alt="Tenis Adidas Last Forum Bad Bunny"
                                />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div" sx={{ fontSize: '18px', fontWeight: 'bold', color: '#717171' }}>
                                Tenis Adidas Last Forum Bad Bunny
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: '20px' }}>
                                $1,249 MXN
                            </Typography>
                        </CardContent>
                    </Card>
                </SwiperSlide>
                <SwiperSlide >
                    <Card>
                        <CardActionArea>
                            <Box sx={{ position: 'relative' }}>
                                <IconAddCart>
                                        <LocalMallOutlinedIcon />
                                    </IconAddCart>
                                <CardMedia
                                    sx={{ height: '300px', width: '100%', objectFit: 'cover' }}
                                    component="img"
                                    image="https://www.innvictus.com/medias/tenis-adidas-last-forum-bad-bunny-in-HQ2153-1.jpg?context=bWFzdGVyfGltYWdlc3wxODYzM3xpbWFnZS9qcGVnfGltYWdlcy9oNjEvaGFiLzExNDEwMDM0Mjk0ODE0LmpwZ3w2ZTYwMGEwY2JmYWNjN2RkMjdmNDg0YmIxZmZhZDkwYjM1MjE1YmVlMzZlZTVkY2RiOTRhZTJmMDlhNzk2ZDEw"
                                    alt="Tenis Adidas Last Forum Bad Bunny"
                                />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div" sx={{ fontSize: '18px', fontWeight: 'bold', color: '#717171' }}>
                                Tenis Adidas Last Forum Bad Bunny
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: '20px' }}>
                                $1,249 MXN
                            </Typography>
                        </CardContent>
                    </Card>
                </SwiperSlide>
                <SwiperSlide >
                    <Card>
                        <CardActionArea>
                            <Box sx={{ position: 'relative' }}>
                                <IconAddCart>
                                        <LocalMallOutlinedIcon />
                                    </IconAddCart>
                                <CardMedia
                                    sx={{ height: '300px', width: '100%', objectFit: 'cover' }}
                                    component="img"
                                    image="https://www.innvictus.com/medias/tenis-adidas-last-forum-bad-bunny-in-HQ2153-1.jpg?context=bWFzdGVyfGltYWdlc3wxODYzM3xpbWFnZS9qcGVnfGltYWdlcy9oNjEvaGFiLzExNDEwMDM0Mjk0ODE0LmpwZ3w2ZTYwMGEwY2JmYWNjN2RkMjdmNDg0YmIxZmZhZDkwYjM1MjE1YmVlMzZlZTVkY2RiOTRhZTJmMDlhNzk2ZDEw"
                                    alt="Tenis Adidas Last Forum Bad Bunny"
                                />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div" sx={{ fontSize: '18px', fontWeight: 'bold', color: '#717171' }}>
                                Tenis Adidas Last Forum Bad Bunny
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: '20px' }}>
                                $1,249 MXN
                            </Typography>
                        </CardContent>
                    </Card>
                </SwiperSlide>
                <SwiperSlide >
                    <Card>
                        <CardActionArea>
                            <Box sx={{ position: 'relative' }}>
                                <IconAddCart>
                                        <LocalMallOutlinedIcon />
                                    </IconAddCart>
                                <CardMedia
                                    sx={{ height: '300px', width: '100%', objectFit: 'cover' }}
                                    component="img"
                                    image="https://www.innvictus.com/medias/tenis-adidas-last-forum-bad-bunny-in-HQ2153-1.jpg?context=bWFzdGVyfGltYWdlc3wxODYzM3xpbWFnZS9qcGVnfGltYWdlcy9oNjEvaGFiLzExNDEwMDM0Mjk0ODE0LmpwZ3w2ZTYwMGEwY2JmYWNjN2RkMjdmNDg0YmIxZmZhZDkwYjM1MjE1YmVlMzZlZTVkY2RiOTRhZTJmMDlhNzk2ZDEw"
                                    alt="Tenis Adidas Last Forum Bad Bunny"
                                />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div" sx={{ fontSize: '18px', fontWeight: 'bold', color: '#717171' }}>
                                Tenis Adidas Last Forum Bad Bunny
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: '20px' }}>
                                $1,249 MXN
                            </Typography>
                        </CardContent>
                    </Card>
                </SwiperSlide>
                <SwiperSlide >
                    <Card>
                        <CardActionArea>
                            <Box sx={{ position: 'relative' }}>
                                <IconAddCart>
                                        <LocalMallOutlinedIcon />
                                    </IconAddCart>
                                <CardMedia
                                    sx={{ height: '300px', width: '100%', objectFit: 'cover' }}
                                    component="img"
                                    image="https://www.innvictus.com/medias/tenis-adidas-last-forum-bad-bunny-in-HQ2153-1.jpg?context=bWFzdGVyfGltYWdlc3wxODYzM3xpbWFnZS9qcGVnfGltYWdlcy9oNjEvaGFiLzExNDEwMDM0Mjk0ODE0LmpwZ3w2ZTYwMGEwY2JmYWNjN2RkMjdmNDg0YmIxZmZhZDkwYjM1MjE1YmVlMzZlZTVkY2RiOTRhZTJmMDlhNzk2ZDEw"
                                    alt="Tenis Adidas Last Forum Bad Bunny"
                                />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div" sx={{ fontSize: '18px', fontWeight: 'bold', color: '#717171' }}>
                                Tenis Adidas Last Forum Bad Bunny
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: '20px' }}>
                                $1,249 MXN
                            </Typography>
                        </CardContent>
                    </Card>
                </SwiperSlide>
                <SwiperSlide >
                    <Card>
                        <CardActionArea>
                            <Box sx={{ position: 'relative' }}>
                                <IconAddCart>
                                        <LocalMallOutlinedIcon />
                                    </IconAddCart>
                                <CardMedia
                                    sx={{ height: '300px', width: '100%', objectFit: 'cover' }}
                                    component="img"
                                    image="https://www.innvictus.com/medias/tenis-adidas-last-forum-bad-bunny-in-HQ2153-1.jpg?context=bWFzdGVyfGltYWdlc3wxODYzM3xpbWFnZS9qcGVnfGltYWdlcy9oNjEvaGFiLzExNDEwMDM0Mjk0ODE0LmpwZ3w2ZTYwMGEwY2JmYWNjN2RkMjdmNDg0YmIxZmZhZDkwYjM1MjE1YmVlMzZlZTVkY2RiOTRhZTJmMDlhNzk2ZDEw"
                                    alt="Tenis Adidas Last Forum Bad Bunny"
                                />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div" sx={{ fontSize: '18px', fontWeight: 'bold', color: '#717171' }}>
                                Tenis Adidas Last Forum Bad Bunny
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: '20px' }}>
                                $1,249 MXN
                            </Typography>
                        </CardContent>
                    </Card>
                </SwiperSlide>
                <SwiperSlide >
                    <Card>
                        <CardActionArea>
                            <Box sx={{ position: 'relative' }}>
                                <IconAddCart>
                                        <LocalMallOutlinedIcon />
                                    </IconAddCart>
                                <CardMedia
                                    sx={{ height: '300px', width: '100%', objectFit: 'cover' }}
                                    component="img"
                                    image="https://www.innvictus.com/medias/tenis-adidas-last-forum-bad-bunny-in-HQ2153-1.jpg?context=bWFzdGVyfGltYWdlc3wxODYzM3xpbWFnZS9qcGVnfGltYWdlcy9oNjEvaGFiLzExNDEwMDM0Mjk0ODE0LmpwZ3w2ZTYwMGEwY2JmYWNjN2RkMjdmNDg0YmIxZmZhZDkwYjM1MjE1YmVlMzZlZTVkY2RiOTRhZTJmMDlhNzk2ZDEw"
                                    alt="Tenis Adidas Last Forum Bad Bunny"
                                />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div" sx={{ fontSize: '18px', fontWeight: 'bold', color: '#717171' }}>
                                Tenis Adidas Last Forum Bad Bunny
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: '20px' }}>
                                $1,249 MXN
                            </Typography>
                        </CardContent>
                    </Card>
                </SwiperSlide>
            </Swiper>
        </Box>
    );
}
