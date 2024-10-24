import LanguageIcon from "@mui/icons-material/Language";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PeopleIcon from "@mui/icons-material/People";
import StarIcon from "@mui/icons-material/Star";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import useRazorpay from "react-razorpay";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  buyCourse,
  verifyEnrollPayment,
} from "../../Features/Slices/courseSlice";

const CourseSidebar = ({ course, isEnrolled = true, firstVideo }) => {
  const navigate = useNavigate();
  const [Razorpay, isLoaded] = useRazorpay();
  const dispatch = useDispatch();

  const { price, courseLanguage, videos, isStudentEnrolled, _id } = course;
  const handleBuyCourse = async () => {
    const payload = {
      amount: price,
      courseId: _id,
      enrolledAt: new Date(),
    };
    const res = await dispatch(buyCourse(payload)).unwrap();
    const enrollmentId = res?.data?.courseEnrollment._id;
    const order_id = res?.data?.order?.id;
    const paymentId = res?.data.paymentId;
    const initPayload = {
      order_id,
      amount: price,
      enrollmentId,
      paymentId,
    };
    initPay(initPayload);
  };

  const initPay = (paymentObj) => {
    const { order_id, amount, enrollmentId, paymentId } = paymentObj;
    const options = {
      key: "rzp_test_jLhZZYBPKlMBn9",
      amount: amount,
      currency: "INR",
      name: "ResearchPro",
      description: "",
      image: "https://example.com/your_logo",
      order_id: order_id,
      handler: async (res) => {
        const payload = { ...res, enrollmentId, paymentId };
        const verifyResponse = await dispatch(
          verifyEnrollPayment(payload)
        ).unwrap();
      },

      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  };

  return (
    <Card>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          Course Details
        </Typography>
        <Grid container spacing={2} alignItems='center' sx={{ mb: 2 }}>
          <Grid item>
            <MonetizationOnIcon />
          </Grid>
          <Grid item>
            <Typography variant='body1'>Price: {price} rupees</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems='center' sx={{ mb: 2 }}>
          <Grid item>
            <LanguageIcon />
          </Grid>
          <Grid item>
            <Typography variant='body1'>Language: {courseLanguage}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems='center' sx={{ mb: 2 }}>
          <Grid item>
            <PeopleIcon />
          </Grid>
          <Grid item>
            <Typography variant='body1'>Enrolled:</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems='center' sx={{ mb: 2 }}>
          <Grid item>
            <MenuBookIcon />
          </Grid>
          <Grid item>
            <Typography variant='body1'>Lessons: {videos?.length}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems='center' sx={{ mb: 2 }} >
          <Grid item>
            <StarIcon />
          </Grid>
          <Grid item>
            <Typography variant='body1'>Rating: </Typography>
          </Grid>
        </Grid>
        {isStudentEnrolled === true ? (
          <Button
            variant='contained'
            color='primary'
            fullWidth
            component={Link}
            to={`/course/${course._id}/lectures/${firstVideo}`}
          >
            Start Lecture
          </Button>
        ) : (
          <Button
            variant='contained'
            color='primary'
            fullWidth
            onClick={handleBuyCourse}
          >
            Buy Course
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseSidebar;
