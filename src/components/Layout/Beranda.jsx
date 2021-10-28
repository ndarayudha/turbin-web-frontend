import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ImgProyek from "../../assets/img_proyek.png";
import ImgBendungan from "../../assets/img_bendungan.jpg";
import ImgTiang from "../../assets/img_tiang.jpg";
import ImgArtikel from "../../assets/img_artikel.jpg";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import styled from "styled-components";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

const ImgComponent = styled.img``;

const carouselContent = [
  {
    id: 1,
    img: ImgProyek,
    desc: "PEMANTAUAN ARUS LISTRIK",
  },
  {
    id: 2,
    img: ImgBendungan,
    desc: "MONITORING DAYA LISTRIK TURBIN",
  },
  {
    id: 3,
    img: ImgTiang,
    desc: "PERKIRAKAN KEBUTUHAN LISTRIK",
  },
  {
    id: 4,
    img: ImgArtikel,
    desc: "ARTIKEL DARI KAMI",
  },
];

const Beranda = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        margin: "0",
      }}
    >
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={true}
        scrollbar={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {carouselContent.map((content) => (
          <SwiperSlide key={content.id}>
            <Box
              sx={{
                backgroundColor: "white",
                height: "100vh",
                width: "200%",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  background: "rgba(20, 66, 155, 0.52)",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  position: "absolute",
                  color: "white",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: "0.7",
                  textAlign: "center",
                }}
              >
                {content.desc}
              </Typography>
              <ImgComponent src={content.img} alt="" />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Beranda;
