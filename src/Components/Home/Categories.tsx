import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Typography } from "@mui/material";
import "swiper/swiper-bundle.css";

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
    <Box sx={{ width: "90%", margin: "auto", marginTop: 4 }}>
      <Box sx={{ position: "relative", textAlign: "center", mb: 3 }}></Box>
      <Swiper
        spaceBetween={20} // Ajusta el espacio entre los elementos
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 1,
          },
        }}
        pagination={{ clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ textAlign: "center", padding: "0 10px" }}>
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  borderRadius: 8,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  width: "100%",
                  height: "auto",
                }}
              />
              <Typography variant="h6" sx={{ mt: 1 }}>
                {image.alt}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Categories;
