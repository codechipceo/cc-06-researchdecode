import React from 'react';
import { ListItem, ListItemSecondaryAction, IconButton } from "@mui/material";
import { IoIosSend } from "react-icons/io";

import { useNavigate } from "react-router-dom";
import ResearchPaperCard from "./ResearchPaperCard/ResearchPaperCard";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const RequestLink = ({ request }) => {
  const { _id, requestBy, createdAt, paperDetail, DOI_number } = request;
  console.log(request);
  
  const navigate = useNavigate();

  const handleSend = () => {
    navigate(`/pending-request/${_id}`);
  };

  return (
  <>
      {/* Using the reusable ResearchPaperCard component */}
      <ResearchPaperCard
        requestDetail={request}
        sendicon={IoIosSend}  // Pass the first icon component
        // secondicon={ImCross}  // Pass the second icon component
      />

     
</>
  );
};

export default RequestLink;
