import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import imgSlider from '../../assets/img/main-slider.png';
import 'swiper/css';
import 'swiper/css/navigation';

export default function SliderMain() {
    return (
        <>
            <Box sx={{ marginTop: "60px" }}>
                <Swiper
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    loop={true}
                    className="mySwiper">
                    <SwiperSlide>
                        <Card sx={{ widh: "100%", height: "500px", position: "relative" }}>
                            <CardMedia
                                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                                image={imgSlider}
                                title="Contemplative Reptile"
                                margin-top="500px"
                            />
                        </Card>
                        <Box sx={{ position: 'absolute', top: '35%', left: '6%' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white', margin: '50px 0', fontSize: '25px', fontFamily: 'Poppins, sans-serif' }}>
                                What's new?
                            </Typography>

                        </Box>
                        <Box sx={{ position: 'absolute', top: '54%', left: '6%' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'semi-bold', color: 'white', marginTop: '5px', fontSize: '15px', fontFamily: 'Poppins, sans-serif' }}>
                                Just millions of people selling the things they love.
                            </Typography>
                        </Box>
                    </SwiperSlide>
                </Swiper>
            </Box>

            <Box>
                <Card>
                    <Typography>
                        <h1>Hola estúpidas</h1>
                    </Typography>
                </Card>
            </Box>
        </>
    );
}
