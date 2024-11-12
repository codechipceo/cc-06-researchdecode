import React from "react";
import { FaRegEye, FaCloudDownloadAlt, FaCloudUploadAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { RxCrossCircled } from "react-icons/rx";
import ResearchPaperCard from "./ReacherchPaperCard/ReacherchPaperCard";

const RequestDetail = ({ requestDetail }) => {
  if (!requestDetail) return null;

  const { requestStatus } = requestDetail;


  const icons = {
    viewicon: requestStatus === "inProgress" ? FaRegEye : null,
    approveicon: requestStatus === "inProgress" ? SiTicktick : null,
    rejecticon: requestStatus === "inProgress" ? RxCrossCircled : null,
    uploadicon: requestStatus === "pending" ? FaCloudUploadAlt : null,
    downloadicon: requestStatus === "approved" ? FaCloudDownloadAlt : null,
  };

  return (
    <>
      <ResearchPaperCard
        requestDetail={requestDetail}
        {...icons} 
      />
    </>
  );
};

export default RequestDetail;