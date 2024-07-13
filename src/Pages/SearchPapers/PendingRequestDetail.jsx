import { Container, Paper } from "@mui/material";
import { HeaderTwo } from "../../Components/Headers/HeaderTwo";
import { useEffect } from "react";
import { usePendingRequests } from "../../Hooks/use-researchPaper";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRequestById, selectRequestDetail } from "../../Features/Slices/requestResearchPaper";

export const PendingRequestDetail = ({ pendingRequestObj }) => {
  const dispatch = useDispatch()
  const breadcrumbPath = [{ label: "Home", path: "/" }];

  const requestDetail = useSelector(selectRequestDetail);

  const { pendingRequestId } = useParams();

    const getRequestDetailsFn = (requestId) => {
      const payload = { requestId: requestId };
      dispatch(getRequestById(payload));
    };
  useEffect(() => {
    getRequestDetailsFn(pendingRequestId);
  }, []);

  console.log(requestDetail);

  const { DOI_number, requestStatus  , } = requestDetail ?? {}
  return (
    <div>
      <HeaderTwo title='Request Detail' breadcrumbPath={breadcrumbPath} />

      <Container>
        <Paper></Paper>
      </Container>
    </div>
  );
};
