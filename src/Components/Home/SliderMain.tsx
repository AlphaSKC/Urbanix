import * as React from "react";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material';
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import imgSlider from "../../assets/img/main-slider.png";
import "swiper/css";
import "swiper/css/navigation";
import Categories from "./Categories";

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
          className="mySwiper"
        >
          <SwiperSlide>
            <Card sx={{ widh: "100%", height: "500px", position: "relative" }}>
              <CardMedia
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                image={imgSlider}
                title="Contemplative Reptile"
                margin-top="500px"
              />
            </Card>
            <Box sx={{ position: "absolute", top: "35%", left: "6%" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  margin: "50px 0",
                  fontSize: "25px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                What's new?
              </Typography>
            </Box>
            <Box sx={{ position: "absolute", top: "54%", left: "6%" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "semi-bold",
                  color: "white",
                  marginTop: "5px",
                  fontSize: "15px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Just millions of people selling the things they love.
              </Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
        marginTop={"40px"}
      >
        <Card
          variant="outlined"
          sx={{ width: "500px", height: "150px", backgroundColor: "#F5F6F8" }}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                sx={{ fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}
              >
                A community doing good
              </Typography>
              <Typography>
                Commerce is a global online marketplace, where people come
                together to make, sell, buy, and collect unique items.
              </Typography>
            </Box>
            <Avatar
              alt="Community"
              src="./assets/img/avatar1.png"
              sx={{ width: 56, height: 56 }}
            />
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{ width: "500px", height: "150px", backgroundColor: "#10E5A5" }}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                sx={{ fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}
              >
                Support independent creators
              </Typography>
              <Typography>
                Just millions of people selling the things they love.
              </Typography>
            </Box>
            <Avatar
              alt="Support"
              src="./assets/img/avatar2.png"
              sx={{ width: 56, height: 56 }}
            />
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{ width: "500px", height: "150px", backgroundColor: "#F5F6F8" }}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                sx={{ fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}
              >
                Peace of mind
              </Typography>
              <Typography>
                Privacy is the highest priority of our dedicated team.
              </Typography>
            </Box>
            <Avatar
              alt="Mind"
              src="./assets/img/avatar3.png"
              sx={{ width: 56, height: 56 }}
            />
          </CardContent>
        </Card>
      </Box>
      <Categories />
    </>
  );
}
