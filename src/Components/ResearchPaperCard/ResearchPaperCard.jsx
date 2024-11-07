import React, { useState } from "react";
import { Panel, Divider, FlexboxGrid, Avatar, Button } from "rsuite";
import Typography from "../../assets/scss/components/Typography";
import "../../assets/scss/components/requestLink.scss";
import PersonIcon from "@rsuite/icons/legacy/User";
import { MainModal } from "../MainModal/MainModal"; // Ensure MainModal is imported
import PDFviewer from "../PDFviewer/PDFviewer"; // Ensure PDFviewer is imported
import {
  approvePaper,
  rejectPaperRequest,
  sendPaper,
} from "../../Features/Slices/requestResearchPaper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ResearchPaperCard = ({
  requestDetail, 
  isOpen,
  onClose,
  formFields,
  handleFormChange,
  handleFormSubmit,
  approveicon: ApproveIcon,
  crossicon: CrossIcon,
  viewicon: ViewIcon,
  downloadicon: DownloadIcon,
  sendicon: SendIcon,
}) => {


  const {
    _id,
    requestBy,
    paperDetail,
    requestStatus,
    DOI_number,
    fileUrl,
    fulfilledBy,
  } = requestDetail;
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleReject = () => dispatch(rejectPaperRequest({ requestId: _id }));

//  have to implement the funconalitys
  // const handleUpload = () => {
  //   const formData = new FormData();
  //   formData.append("file", uploadFile);
  //   formData.append("requestId", _id);
  //   dispatch(sendPaper(formData));
  // };


  const handleApprove = () => {
    dispatch(approvePaper({ requestId: _id, fulfilledBy }));
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  const {
    title,
    author,
    ["container-title"]: containerTitle,
    publisher,
  } = paperDetail;

  const [open, setOpen] = useState(false);

  const handleSend = () => {
    navigate(`/pending-request/${_id}`);
    console.log("click");
  };

  const handleDownload = async () => {
    if (fileUrl) {
      try {
        const response = await fetch(fileUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "paper.pdf"; // Specify the filename here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Download failed", error);
      }
    }
  };

  return (
    <>
      <Panel className="panel-border">
        <Typography size="lg" variant="bold">
          {containerTitle && containerTitle[0]}
        </Typography>
        <Typography size="sm">{title && title[0]}</Typography>
        <Divider />

        <FlexboxGrid className="details" align="middle">
          <FlexboxGrid.Item className="author-info">
            <Avatar circle icon={<PersonIcon />} size="md" />
            <Typography className="name" size="sm">
              By {requestBy?.firstName} {requestBy?.lastName}
            </Typography>
          </FlexboxGrid.Item>

          <p className="publisher">Publisher</p>

          <FlexboxGrid.Item className="publisher_name">
            <Typography size="xm">
              {author && author.length > 0 && (
                <div className="author-container">
                  <div className="author-names">
                    <p>
                      {author[0].given} {author[0].family}
                    </p>
                    {isExpanded &&
                      author.slice(1).map((name, index) => (
                        <p key={index + 1}>
                          {name.given} {name.family}
                        </p>
                      ))}
                  </div>
                  {author.length > 1 && (
                    <Button
                      appearance="link"
                      onClick={toggleExpand}
                      className="toggle-button"
                    >
                      {isExpanded ? "Show Less" : "Show All"}
                    </Button>
                  )}
                </div>
              )}
            </Typography>
          </FlexboxGrid.Item>

          <FlexboxGrid.Item className="doi">
            <Typography size="xm" weight="bold">
              DOI Number: {DOI_number}
            </Typography>
          </FlexboxGrid.Item>
        </FlexboxGrid>

        <FlexboxGrid className="icons">
          {SendIcon && <SendIcon className="sendbutton" onClick={handleSend} />}
          {ApproveIcon && <ApproveIcon className="firsticon" onClick={handleApprove}/>}
          {CrossIcon && (
            <CrossIcon className="crossicon" onClick={handleReject} />
          )}
          {fileUrl && (
            <>
              <ViewIcon onClick={() => setOpen(true)} />

              <DownloadIcon onClick={handleDownload} />
            </>
          )}
        </FlexboxGrid>

        <MainModal open={open} setOpen={setOpen}>
          {fileUrl && <PDFviewer file={fileUrl} />}
        </MainModal>
      </Panel>
    </>
  );
};

export default ResearchPaperCard;
