import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStudentInfo } from "../Features/Slices/studentSlice";
import { approvePaper, rejectPaperRequest, sendPaper } from "../Features/Slices/requestResearchPaper";
import { useNavigate } from "react-router-dom";
import ResearchPaperCard from "./ResearchPaperCard/ResearchPaperCard";
import { SiTicktick } from "react-icons/si";
import { RxCrossCircled } from "react-icons/rx";
import { FaEye } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
const RequestDetail = ({ requestDetail }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedinUser = useSelector(selectStudentInfo);
  const [uploadFile, setUploadFile] = useState(null);
  const [open, setOpen] = useState(false); // State to control PDF viewer modal

  if (!requestDetail) return null;

  const { _id, requestBy, paperDetail, requestStatus, DOI_number, fileUrl, fulfilledBy } = requestDetail;

  // Handlers for request actions
  const handleApprove = () => dispatch(approvePaper({ requestId: _id, fulfilledBy }));
  const handleReject = () => dispatch(rejectPaperRequest({ requestId: _id }));

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", uploadFile);
    formData.append("requestId", _id);
    dispatch(sendPaper(formData));
  };

  

  return (
    <>
      <ResearchPaperCard
       requestDetail={requestDetail}
       approveicon={SiTicktick}
        crossicon={RxCrossCircled}
        viewicon={FaEye}
        downloadicon={FaFileDownload}
      />
      {open && (
        <MainModal open={open} setOpen={setOpen}>
          <PDFviewer file={fileUrl} /> {/* PDF Viewer for the file */}
        </MainModal>
      )}
    </>
  );
};

export default RequestDetail;
