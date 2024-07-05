import {
  Box,
  Button,
  Container,
  List,
  TextField,
  Typography,
} from "@mui/material";
import PaperCard from "../../Components/card";
import { HeaderTwo } from "../../Components/Headers/HeaderTwo";
import RequestLink from "../../Components/requestLink";
import StatusHandler from "../../Components/statusHandler";
import {
  usePendingRequests,
  useResearchPaper,
} from "../../Hooks/use-researchPaper";

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

  const handleSendPaper = (userId) => {
    // Implement the logic to send the paper
    console.log(`Send paper to user with ID: ${userId}`);
    // navigate(`/inbox/${userId}`); // Uncomment this if you have the navigation logic in place
  };

  const breadcrumbPath = [{ label: "Home", path: "/" }];

  return (
    <div>
      <HeaderTwo title='RESEARCH PAPER' breadcrumbPath={breadcrumbPath} />
      <Container maxWidth='md' sx={{ marginTop: "40px" }}>
        <Box
          component='form'
          onSubmit={(e) => handleSearch(e, doiNumber)}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <TextField
            label='DOI Number'
            variant='outlined'
            value={doiNumber}
            onChange={(e) => setDoiNumber(e.target.value)}
            fullWidth
          />
          <Button variant='contained' color='primary' type='submit'>
            Search
          </Button>
        </Box>

        <StatusHandler
          isLoading={isLoading}
          isError={isError}
          errorMessage='Error fetching research paper'
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
            variant='h5'
            component='div'
            sx={{ marginTop: "30px", marginBottom: "20px" }}
          >
            Pending Requests
          </Typography>
          <List>
            {pendingRequests &&
              pendingRequests?.map((request) => (
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
