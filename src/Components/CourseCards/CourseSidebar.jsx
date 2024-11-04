import React from "react";
import { IoIosTime } from "react-icons/io";
import { FaLanguage } from "react-icons/fa";
import { Panel } from "rsuite"; // Changed to rsuite
import useRazorpay from "react-razorpay";
import Typography from "../../assets/scss/components/Typography";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  buyCourse,
  verifyEnrollPayment,
} from "../../Features/Slices/courseSlice";
import '../../assets/scss/components/CourseSidebar.scss';
import CustomButton from "../../assets/scss/components/CustomButton";


const CourseSidebar = ({ course, isEnrolled = true, firstVideo }) => {
  const navigate = useNavigate();
  const [Razorpay, isLoaded] = useRazorpay();
  const dispatch = useDispatch();

  const { price, courseLanguage, videos, isStudentEnrolled, _id, courseBanner,courseName } = course;

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
    <Panel className="course-sidebar" shaded>
      {courseBanner && (
        <img src={courseBanner} alt="Course Banner" className="course-banner" />
      )}
      <div className="course-content">
        <div className="course-info">
          <Typography size="xl" className="price-text">
            Price: ₹{price}
          </Typography>
        </div>

        {!isStudentEnrolled ? (
          <CustomButton
appearance="bold"
            fullWidth
            // className="buy-button"
            onClick={handleBuyCourse}
          >
            Buy Course
          </CustomButton>
        ) : (
          <CustomButton
            appearance="bold" // Using rsuite button appearance
            className="buy-button"
            fullWidth
            component={Link}
            to={`/course/${course._id}/lectures/${firstVideo}`}
          >
            Start Lecture
          </CustomButton>
        )}

        <hr />

        <Typography size="lg" variant="bold">
         {courseName}
        </Typography>

        <div className="course-includes">
          <div className="feature-item">
            <FaLanguage className="icon-style" />
            <Typography className="include-text"> This course is in {courseLanguage} language</Typography>
          </div>

          <div className="feature-item">
            <IoIosTime className="icon-style" />
            <Typography className="include-text"> This Course includes {videos.length} videos</Typography>
          </div>
        </div>
      </div>
    </Panel>
  );
};

export default CourseSidebar;
