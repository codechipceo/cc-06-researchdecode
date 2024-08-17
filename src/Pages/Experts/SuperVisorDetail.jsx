import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { HeaderTwo } from "../../Components/Headers/HeaderTwo";
import { useCallback } from "react";
import useRazorpay from "react-razorpay";

import { Box, Button, Container, Tab, Tabs, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
  getConsultancyCardById,
  selectConsultancyCardById,
} from "../../Features/Slices/consultancyCardSlice";
import {
  createConsultancy,
  selectConsultancyPaymentVerified,
  verifyConultancyPayment,
} from "../../Features/Slices/consultancySlice";
import {
  selectStudentData,
  selectStudentInfo,
} from "../../Features/Slices/studentSlice";

const breadcrumbPath = [
  { label: "Home", path: "/" },
  { label: "Supervisor", path: "/experts" },
];

export const SuperVisorDetail = () => {
  const dispatch = useDispatch();
  const consultancyCardDetail = useSelector(selectConsultancyCardById);
  const isPaymentVerified = useSelector(selectConsultancyPaymentVerified);
  const [tabValue, setTabValue] = useState(0);
  const { supervisorId } = useParams();
  const navigate = useNavigate();
  const loggedinUser = useSelector(selectStudentInfo);

  const [Razorpay, isLoaded] = useRazorpay();

  const { name, experience, qualification, _id } =
    consultancyCardDetail?.teacherId ?? {};
  const { single, project } = consultancyCardDetail?.pricing ?? {};

  const initPay = (paymentObj) => {
    const { order_id, amount, consultancyId } = paymentObj;
    const options = {
      key: "rzp_test_jLhZZYBPKlMBn9",
      amount: amount ?? single,
      currency: "INR",
      name: "ResearchPro",
      description: "",
      image: "https://example.com/your_logo",
      order_id: order_id,
      handler: (res) => {
        const verificationPayload = { ...res, consultancyId: consultancyId };
        dispatch(verifyConultancyPayment(verificationPayload)).then(() => {
          if (isPaymentVerified) {
            navigate("/");
          }
        });
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  };

  const handleConsultancy = async () => {
    const payload = {
      studentId: loggedinUser._id,
      teacherId: _id,
      cardId: supervisorId,
      amount: amount ?? Number(single),
      type: tabValue === 0 ? "single" : "project",
    };
    const res = await dispatch(createConsultancy(payload)).unwrap();
    const order_id = res?.data?.order?.id;
    const newConsultancyId = res?.data?.consultancy?._id;

    if (order_id) {
      const payloadObj = {
        consultancyId: newConsultancyId,
        order_id,
        amount: payload.amount,
      };
      initPay(payloadObj);
    } else {
      throw new Error("Order id not found");
    }
  };

  useEffect(() => {
    dispatch(getConsultancyCardById({ consultancyCardId: supervisorId }));
  }, []);

  const [amount, setAmount] = useState(single);

  return (
    <div>
      <HeaderTwo title='Supervisor Detail' breadcrumbPath={breadcrumbPath} />
      <Container>
        <Grid2 container>
          <Grid2 item xs={12} md={8}>
            <Box>
              <Typography variant='h3' fontWeight={500}>
                {name}
              </Typography>
              <Typography variant='body1' fontWeight={500}>
                {"Qualitification" || qualification}
              </Typography>
              <Typography variant='body1' fontWeight={500}>
                {"Experience" || experience}
              </Typography>
            </Box>
          </Grid2>
          <Grid2 item xs={12} md={4}>
            <Tabs
              value={tabValue}
              onChange={(e, newValue) => {
                setTabValue(newValue);
                setAmount(Number(e.target.id));
              }}
              aria-label='course details tabs'
            >
              <Tab label='Single' id={single} />
              <Tab label='Project' id={project} />
              {/* <Tab label='Reviews' /> */}
            </Tabs>
            <Typography>{tabValue === 0 && single}</Typography>
            <Typography>{tabValue === 1 && project}</Typography>

            <Button fullWidth variant='contained' onClick={handleConsultancy}>
              Continue
            </Button>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};
