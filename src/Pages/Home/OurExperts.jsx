import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { TeacherCard } from "../../Components/Cards/TeacherCard";
import { SwiperSlider } from "../../Components/Swiper/SwiperSlider";
import { useConsultancyCard } from "../../Hooks/useConsultancyCard";
export const OurExperts = () => {
    const {
      consultancyCardData: teacherData,
     
    } = useConsultancyCard();
  return (
    <>
      <Grid2 my={10}>
        <Typography variant='h6' align='center' color={"primary"}>
          Meet our experts
        </Typography>
        <Typography variant='h3' align='center' color={"dark"}>
          Hire Experts For Consultancy
        </Typography>
        { teacherData &&

        <SwiperSlider slidesArr={teacherData} Card={TeacherCard} />
        }
      </Grid2>
    </>
  );
};
