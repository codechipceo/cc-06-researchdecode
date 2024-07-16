import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  List,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PaperCard from "../../Components/card";
import { HeaderTwo } from "../../Components/Headers/HeaderTwo";
import RequestLink from "../../Components/requestLink";
import StatusHandler from "../../Components/statusHandler";
import {
  usePendingRequests,
  useResearchPaper,
} from "../../Hooks/use-researchPaper";
import { useDispatch, useSelector } from "react-redux";
import { createPaperRequest } from "../../Features/Slices/requestResearchPaper";
import { selectStudentInfo } from "../../Features/Slices/studentSlice";
import RaiseRequestModal from "../../Components/RaiseRequestModal"; // Adjust the import path as necessary

export const SearchPapers = () => {
  const {
    doiNumber,
    setDoiNumber,
    researchPaper,
    isLoading,
    isError,
    handleSearch,
  } = useResearchPaper();
  const { pendingRequests } = usePendingRequests();

  const dispatch = useDispatch();
  const loggedinUser = useSelector(selectStudentInfo);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formFields, setFormFields] = useState({
    title: "",
    doi: "",
    author: "",
    documentType: "",
  });

  const handleSendPaper = (userId) => {
    // Implement the logic to send the paper
    // navigate(`/inbox/${userId}`); // Uncomment this if you have the navigation logic in place
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestPayload = {
      doiNumber: formFields.doi,
      requestBy: loggedinUser._id,
      paperDetail: {
        title: formFields.title,
        author: formFields.author,
        documentType: formFields.documentType,
      },
    };
    dispatch(createPaperRequest(requestPayload));
    handleCloseModal();
  };

  const breadcrumbPath = [{ label: "Home", path: "/" }];

  return (
    <div>
      <HeaderTwo title="RESEARCH PAPER" breadcrumbPath={breadcrumbPath} />
      <Container maxWidth="md" sx={{ marginTop: "40px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <TextField
            label="DOI Number"
            variant="outlined"
            value={doiNumber}
            onChange={(e) => setDoiNumber(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleSearch(e, doiNumber)}
            sx={{
              borderRadius: 2,
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Search
          </Button>
           <Button
            variant='contained'
            color='secondary'
            onClick={handleOpenModal}
            sx={{
              borderRadius: 2,
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Raise Request
          </Button>
        </Box>

        <RaiseRequestModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          formFields={formFields}
          handleFormChange={handleFormChange}
          handleFormSubmit={handleFormSubmit}
        />

        <StatusHandler
          isLoading={isLoading}
          isError={isError}
          errorMessage="Error fetching research paper"
        />

        {!isLoading && !isError && researchPaper && (
          <PaperCard
            title={researchPaper.title}
            author={researchPaper.author}
            publishedDate={researchPaper.publishedDate}
            doi={researchPaper.DOI}
            language={researchPaper.language}
            abstract={researchPaper.abstract}
            paperDetail={researchPaper}
          />
        )}

        <Container>
          <Typography
            variant="h5"
            component="div"
            sx={{ marginTop: "30px", marginBottom: "20px" }}
          >
            Pending Requests
          </Typography>
          <List>
            {pendingRequests &&
              pendingRequests.map((request) => (
                <RequestLink
                  key={request._id}
                  request={request}
                  onSend={handleSendPaper}
                />
              ))}
          </List>
        </Container>
      </Container>
    </div>
  );
};