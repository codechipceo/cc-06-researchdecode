import "swiper/css";
import { register } from "swiper/element/bundle";
register();
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Container, useMediaQuery, useTheme } from "@mui/material";

export const SwiperSlider = ({ slidesArr, Card }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container maxWidth={'auto'}>
      <swiper-container
        navigation='true'
        slides-per-view={isSmallScreen ? "1" : "4"}
        space-between='20'
        breakpoints={JSON.stringify({
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        })}
      >
        {slidesArr &&
          slidesArr.map((card, index) => {
            return (
              <swiper-slide key={index} style={{ padding: "20px 40px" }}>
                <Card data={card} />
              </swiper-slide>
            );
          })}
      </swiper-container>
    </Container>
  );
};
