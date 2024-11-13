import { Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { HeaderTwo } from "../../Components/Headers/HeaderTwo";
import RequestDetail from "../../Components/RequestDetail";
import { getRequestById, selectRequestDetail } from "../../Features/Slices/requestResearchPaper";
import { HeaderThree } from "../../Components/Headers/HeaderThree";
export const PendingRequestDetail = ({ pendingRequestObj }) => {
  const dispatch = useDispatch()
  const breadcrumbPath = [{ label: "Home", path: "/" }];

  const requestDetail = useSelector(selectRequestDetail);
console.log(requestDetail);

  const { pendingRequestId } = useParams();

    const getRequestDetailsFn = (requestId) => {
      const payload = { requestId: requestId };
      dispatch(getRequestById(payload));
    };
  useEffect(() => {
    getRequestDetailsFn(pendingRequestId);
  }, []);


  const { DOI_number, requestStatus  , } = requestDetail ?? {}
  return (
    <div>
      <HeaderThree title='Research' breadcrumbPath={breadcrumbPath} backgroundImage ={"../../../public/images/banner/bgrp.png"} />

      {/* <HeaderTwo title='Request Detail' breadcrumbPath={breadcrumbPath} /> */}

      <Container>
        <RequestDetail requestDetail={requestDetail}/>
      </Container>
    </div>
  );
};