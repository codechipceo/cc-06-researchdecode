import React, { useEffect } from "react";
import { usePendingRequests } from "../../Hooks/use-researchPaper";
import { useDispatch, useSelector } from "react-redux";
import { selectStudentInfo } from "../../Features/Slices/studentSlice";
import {
  getPendingRequests,
  selectPendingRequests,
} from "../../Features/Slices/requestResearchPaper";
import RequestLink from "../../Components/requestLink";
import RequestDetail from "../../Components/RequestDetail";

const Request = () => {
  const studentInfo = useSelector(selectStudentInfo);
  const pendingRequests = useSelector(selectPendingRequests);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getPendingRequests({
        userId: studentInfo._id,
        requestStatus: "inProgress",
      })
    );
  }, [dispatch]);
  return (
    <div>
      {pendingRequests &&
        pendingRequests.map((item, i) => {
          return <RequestDetail requestDetail={item} key={item._id} />;
        })}
    </div>
  );
};

export default Request;
