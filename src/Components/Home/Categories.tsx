import React from "react";
import { Box, CardActionArea, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../../assets/css/Swiper.module.css';

interface imagesCategory {
  src: string;
  alt: string;
}

const images: imagesCategory[] = [
  {
    src: "./images/categorias/1.png",
    alt: "Category 1",
  },
  {
    src: "./images/categorias/2.png",
    alt: "Category 2",
  },
  {
    src: "./images/categorias/3.png",
    alt: "Category 3",
  },
  {
    src: "./images/categorias/4.png",
    alt: "Category 4",
  },
  {
    src: "./images/categorias/5.png",
    alt: "Category 5",
  },
  {
    src: "./images/categorias/6.png",
    alt: "Category 6",
  },
];

const Categories = () => {
  return (
    <Box sx={{ margin: '50px 0', position: 'relative' }}>
      {/* Encabezado */}
      <Grid container alignItems="center">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography className='title-section'>
            Encuentra cosas que te encantarán.
          </Typography>
          <Typography className='subtitle-section'>
            ¡Explora las categorias!
          </Typography>
        </Grid>
      </Grid>
      {/* Botons Navigate */}
      <div className={styles.NextCategory}>
        <ArrowForwardIosIcon />
      </div>
      <div className={styles.PrevCategory}>
        <ArrowBackIosNewIcon />
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={{ nextEl: `.${styles.NextCategory}`, prevEl: `.${styles.PrevCategory}` }}
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
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        pagination={{ clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ borderRadius: '20px', boxShadow: '0px 0px 10px #babecc' }}>
                <CardActionArea sx={{ height: '100%', padding: '15px' }}>
                  <CardMedia
                    sx={{ height: '200px', width: '100%', objectFit: 'cover', borderRadius: '10px' }}
                    component="img"
                    image={image.src}
                    alt={image.alt}
                  />
                </CardActionArea>
              </Box>
              <CardContent>
                <Typography gutterBottom component="div" sx={{ fontSize: '18px', fontWeight: 'bold', color: '#717171' }}>
                  {image.alt}
                </Typography>
              </CardContent>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Categories;
