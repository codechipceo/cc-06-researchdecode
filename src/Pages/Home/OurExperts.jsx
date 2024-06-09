import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { SwiperSlider } from "../../Components/Swiper/SwiperSlider";
import { TeacherCard } from "../../Components/Cards/TeacherCard";
import { useTeacher } from "../../Hooks/use-teacher";
export const OurExperts = () => {
  const { teacherData } = useTeacher();
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
