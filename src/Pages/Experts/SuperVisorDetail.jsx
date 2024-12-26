import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { HeaderThree } from "../../Components/Headers/HeaderThree";
import useRazorpay from "react-razorpay";
import ExpertDetailCard from "../../Components/Cards/ExpertDetailCard";
import CustomDatePicker from "../../Components/CustomDatePicker/CustomDatePicker";

import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
  getConsultancyCardById,
  selectConsultancyCardById,
} from "../../Features/Slices/consultancyCardSlice";
import {
  createConsultancy,
  selectConsultancyPaymentVerified,
  verifyConsultancy,
  verifyConultancyPayment,
} from "../../Features/Slices/consultancySlice";
import { selectStudentInfo } from "../../Features/Slices/studentSlice";
import CustomButton from "../../Components/CustomButton/CustomButton";

import { useSockets } from "../../Hooks/useSockets";

const breadcrumbPath = [
  { label: "Home", path: "/" },
  { label: "Hire Expert", path: "/experts" },
];

export const SuperVisorDetail = () => {
  const dispatch = useDispatch();
  const consultancyCardDetail = useSelector(selectConsultancyCardById);
  const isPaymentVerified = useSelector(selectConsultancyPaymentVerified);
  const [tabValue, setTabValue] = useState(0);
  const { supervisorCardId } = useParams();
  const navigate = useNavigate();
  const loggedinUser = useSelector(selectStudentInfo);
  const [isConsultancyVerified, setIsConsultancyVerified] = useState(false);
  const { socket } = useSockets();

  const [Razorpay, isLoaded] = useRazorpay();

  const { name, email, experience, qualification, _id } =
    consultancyCardDetail?.teacherId ?? {};
  console.log(consultancyCardDetail);
  const { single, project } = consultancyCardDetail?.pricing ?? {};

  const initPay = (paymentObj) => {
    const { order_id, amount, consultancyId } = paymentObj;
    const options = {
      key: "rzp_test_jLhZZYBPKlMBn9",
      amount: amount ?? single,
      currency: "INR",
      name: "Researchdecode",
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
      cardId: supervisorCardId,
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
    if (_id) {
      socket.emit("online", _id);
    }
    dispatch(getConsultancyCardById({ consultancyCardId: supervisorCardId }));
    dispatch(verifyConsultancy({ consultancyCardId: supervisorCardId }))
      .unwrap()
      .then((res) => setIsConsultancyVerified(res?.data));
  }, [supervisorCardId]);

  const [amount, setAmount] = useState(single);

  return (
    <div>
      <HeaderThree
        title='Supervisor Detail'
        breadcrumbPath={breadcrumbPath}
        // backgroundImage={bgImage}
      />
      <Container>
        <Grid2 container spacing={3} sx={{ paddingTop: "2rem" }}>
          <Grid2 item xs={4}>
            <Box>
              <ExpertDetailCard
                name={name}
                email={email}
                experience={experience}
                qualification={qualification}
              />
            </Box>
          </Grid2>
          <Grid2 item xs={4}>
            {/* <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                textAlign: "justify",
              }}
            >
              <Box>
                <h5>Heading of the teachers detail.</h5>
              </Box>
              <Box>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </Box>
            </Box> */}
          </Grid2>
          <Grid2 item xs={4}>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            >
              <Tabs
                value={tabValue}
                onChange={(e, newValue) => {
                  setTabValue(newValue);
                  setAmount(Number(e.target.id));
                }}
                aria-label='course details tabs'
              >
                <Tab label='Single' id={single} />
                {/* <Tab label='Project' id={project} /> */}
                {/* <Tab label="Reviews" /> */}
              </Tabs>
              {/* <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "1rem",
                }}
              >
                <Typography
                  variant='body2'
                  color='text.secondary'
                  textAlign='center'
                >
                  <strong>Select Project Date:</strong>
                </Typography>

                <CustomDatePicker
                  placeholder='Pick a date'
                  format='yyyy-MM-dd'
                  onChange={(date) => console.log("Selected Date:", date)}
                />
              </Box> */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "1rem",
                }}
              >
                {/* ON Click alignment of amount needs to be fixed later no */}
                <Typography
                  variant='body2'
                  color='text.secondary'
                  textAlign='center'
                >
                  <strong>Project Cost:</strong>
                </Typography>

                <Typography>{tabValue === 0 && single}</Typography>
                <Typography>{tabValue === 1 && project}</Typography>
              </Box>

              <CustomButton
                fullWidth
                variant='primary'
                disabled={isConsultancyVerified}
                onClick={handleConsultancy}
              >
                {isConsultancyVerified ? "Currently Active" : "Buy"}
              </CustomButton>
              <div className='supervisor-chat-video-btn'>
                <CustomButton
                  variant={"primary"}
                  onClick={() => {
                    navigate(`/inbox/${_id}`);
                  }}
                >
                  Chat{" "}
                </CustomButton>
                <CustomButton
                  disabled={isConsultancyVerified === false}
                  variant={"primary"}
                  onClick={() =>
                    navigate(
                      `/consultancyCard/${supervisorCardId}/videocall/${_id}`
                    )
                  }
                >
                  Video Call
                </CustomButton>
              </div>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};
