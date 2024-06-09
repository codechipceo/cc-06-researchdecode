import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { SwiperSlider } from "../../Components/Swiper/SwiperSlider";
import { TeacherCard } from "../../Components/Cards/TeacherCard";

export const OurExperts = () => {
  return (
    <>
      <Grid2 my={10}>
        <Typography variant='h6' align='center' color={"primary"}>
          Meet our experts
        </Typography>
        <Typography variant='h3' align='center' color={"dark"}>
          Hire Experts For Consultancy
        </Typography>
        <SwiperSlider
          slidesArr={["data", "data", "data", "data", "data", "data"]}
          Card={TeacherCard}
        />
      </Grid2>
    </>
  );
};
