import React, { useState, useRef } from "react";
import {
  Panel,
  Divider,
  FlexboxGrid,
  Avatar,
  Button,
  Message,
} from "rsuite";
import Typography from "../../assets/scss/components/Typography";
import PersonIcon from "@rsuite/icons/legacy/User";
import { MainModal } from "../MainModal/MainModal";
import PDFviewer from "../PDFviewer/PDFviewer";
import {
  approvePaper,
  rejectPaperRequest,
  sendPaper,
} from "../../Features/Slices/requestResearchPaper";
import { useDispatch, useSelector } from "react-redux";
import { selectStudentInfo } from "../../Features/Slices/studentSlice";
import { useNavigate } from "react-router-dom";

const ResearchPaperCard = ({
  requestDetail,
  approveicon: ApproveIcon,
  rejecticon: RejectIcon,
  downloadicon: DownloadIcon,
  uploadicon: UploadIcon,
  sendicon: SendIcon,
  viewicon: ViewIcon
}) => {
  const { _id, requestBy, paperDetail, requestStatus, DOI_number, fileUrl, fulfilledBy} = requestDetail;

  const [isExpanded, setIsExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [uploadFile, setUploadFile] = useState(null);

  const fileInputRef = useRef(null); // Reference for the hidden file input

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedinUser = useSelector(selectStudentInfo);
  const handlePanelClick = (e) => {
    if (fileUrl) {
      setOpen(true);
    } else {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const handleUpload = () => {
    if (uploadFile) {
      const formData = new FormData();
      formData.append("file", uploadFile);
      formData.append("requestId", _id);
      dispatch(sendPaper(formData));
    } else {
      fileInputRef.current.click(); // Opens file dialog if no file is selected
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadFile(file);
      handleUpload(); // Calls upload immediately after file is selected
    }
  };

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const handleApprove = () => {
    dispatch(approvePaper({ requestId: _id, fulfilledBy }));
  };

  const handleReject = () => {
    dispatch(rejectPaperRequest({ requestId: _id }));
  };

  const handleDownload = async () => {
    if (fileUrl) {
      try {
        const response = await fetch(fileUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "paper.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Download failed", error);
      }
    }
  };

  const handleSend = () => {
    if (location.pathname !== `/pending-request/${_id}`) {
      navigate(`/pending-request/${_id}`);
    }
  };

  const { title, author, ["container-title"]: containerTitle, publisher } = paperDetail;

  return (
    <>
      {showAlert && (
        <Message showIcon type="error" closable onClose={() => setShowAlert(false)}>
          Unable to open this document
        </Message>
      )}

      <Panel className="panel-border" style={{ cursor: "pointer" }}>
        <div onClick={handleSend}>
          <Typography size="lg" variant="bold">
            {containerTitle && containerTitle[0]}
          </Typography>
          <Typography size="sm">{title && title[0]}</Typography>
          <Typography size="sm" variant="bold">Status:-{requestStatus}</Typography>
          <Divider />
          <FlexboxGrid className="details" align="middle">
            <FlexboxGrid.Item className="author-info">
              <Avatar circle icon={<PersonIcon />} size="md" />
              <Typography className="name" size="sm">
                By {requestBy?.firstName} {requestBy?.lastName}
              </Typography>
            </FlexboxGrid.Item>

            <p className="publisher">Publisher: {publisher}</p>

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
                        onClick={(e) => {
                          e.stopPropagation(); // Prevents expanding when card is clicked
                          toggleExpand();
                        }}
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
        </div>

        <FlexboxGrid className="icons">
          {loggedinUser?._id !== requestBy?._id && (
            <>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {UploadIcon && <UploadIcon onClick={handleUpload} style={{ cursor: "pointer" }} />}
            </>
          )}
          {fileUrl && loggedinUser?._id === requestBy?._id && (
            <>
              {ApproveIcon && <ApproveIcon className="firsticon" onClick={handleApprove} />}
              {RejectIcon && <RejectIcon className="crossicon" onClick={handleReject} />}
              {ViewIcon && <ViewIcon onClick={handlePanelClick} />}
              {DownloadIcon && <DownloadIcon onClick={handleDownload} />}
            </>
          )}
        </FlexboxGrid>
      </Panel>

      <MainModal open={open} setOpen={setOpen}>
        {fileUrl && <PDFviewer file={fileUrl} />}
      </MainModal>
    </>
  );
};

export default ResearchPaperCard;
