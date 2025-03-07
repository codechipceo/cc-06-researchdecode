import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RequestDetail from "../../Components/RequestDetail";
import { HeaderThree } from "../../Components/Headers/HeaderThree";

import {
  getPendingRequests,
  selectPendingRequests,
} from "../../Features/Slices/requestResearchPaper";
import { selectStudentInfo } from "../../Features/Slices/studentSlice";
import { HeaderTwo } from "../../Components/Headers/HeaderTwo";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Footer from "../LandingPage/Section/Footer";
const breadcrumbPath = [{ label: "Home", path: "/" }];

const Request = () => {
  const [status, setStatus] = useState("pending");
  const studentInfo = useSelector(selectStudentInfo);
  const pendingRequests = useSelector(selectPendingRequests);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getPendingRequests({
        userId: studentInfo._id,
        requestStatus: status,
      })
    );
  }, [dispatch, status]);

  return (
    <div>
    <HeaderThree title='Research' breadcrumbPath={breadcrumbPath} backgroundImage ={"../../../public/images/banner/bgrp.png"} />
      <Container>
      <Typography mb={4}>Approved requests will disappear in next 48 hours</Typography>
        <FormControl variant='outlined' >
          <InputLabel>Status</InputLabel>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            label='Status'
          >
            <MenuItem value='pending'>Pending</MenuItem>
            <MenuItem value='inProgress'>In Progress</MenuItem>
            <MenuItem value='approved'>Approved</MenuItem>
          </Select>
        </FormControl>
        {pendingRequests.length > 0 ? (
          pendingRequests.map((item) => {
            return <RequestDetail requestDetail={item} key={item._id} />;
          })
        ) : (
          <Typography>No request</Typography>
        )}
      </Container>
      <Footer/>
    </div>
  );
};

export default Request;
