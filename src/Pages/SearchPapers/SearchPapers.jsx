// import React from "react";
// import { Box, TextField, Button, Container } from "@mui/material";
// import PaperCard from "../../Components/card";
// import { useResearchPaper } from "../../Hooks/use-researchPaper";
// import ResponsiveAppBar from "../../Components/Navbar/Navbar";
// import StatusHandler from "../../Components/statusHandler";
// import { HeaderTwo } from "../../Components/Headers/HeaderTwo";

// export const SearchPapers = () => {
//   const {
//     doiNumber,
//     setDoiNumber,
//     researchPaper,
//     isLoading,
//     isError,
//     handleSearch,
//   } = useResearchPaper();

//   const breadcrumbPath = [{ label: "Home", path: "/" }];

//   return (
//     <div>
//       <HeaderTwo title="RESEARCH PAPER" breadcrumbPath={breadcrumbPath} />
//       <Container maxWidth="md" sx={{ marginTop: "40px" }}>
//         <Box component="form" onSubmit={(e) => handleSearch(e, doiNumber)} sx={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
//           <TextField
//             label="DOI Number"
//             variant="outlined"
//             value={doiNumber}
//             onChange={(e) => setDoiNumber(e.target.value)}
//             fullWidth
//           />
//           <Button variant="contained" color="primary" type="submit">
//             Search
//           </Button>
//         </Box>

//         <StatusHandler
//           isLoading={isLoading}
//           isError={isError}
//           errorMessage="Error fetching research paper"
//         />

//         {!isLoading && !isError && researchPaper && (
//           <PaperCard
//             title={researchPaper.title}
//             author={researchPaper.author}
//             publishedDate={researchPaper.publishedDate}
//             doi={researchPaper.DOI}
//             language={researchPaper.language}
//             abstract={researchPaper.abstract}
//           />
//         )}
//       </Container>
//     </div>
//   );
// };

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Container,
  List,
  Typography,
} from "@mui/material";
import PaperCard from "../../Components/card";
import { useResearchPaper } from "../../Hooks/use-researchPaper";

import StatusHandler from "../../Components/statusHandler";
import { HeaderTwo } from "../../Components/Headers/HeaderTwo";
import RequestLink from "../../Components/requestLink";

export const SearchPapers = () => {
  const {
    doiNumber,
    setDoiNumber,
    researchPaper,
    isLoading,
    isError,
    handleSearch,
  } = useResearchPaper();

  const [paperRequests, setPaperRequests] = useState([
    // Example paper requests
    {
      id: 1,
      title: "Paper 1",
      author: "Author 1",
      doi: "10.1000/xyz123",
      link: "https://example.com/paper1",
    },
    {
      id: 2,
      title: "Paper 2",
      author: "Author 2",
      doi: "10.1000/xyz456",
      link: "https://example.com/paper2",
    },
  ]);

  const handleSendPaper = (paperId) => {
    // Implement the logic to send the paper
    console.log(`Send paper with ID: ${paperId}`);
  };

  const breadcrumbPath = [{ label: "Home", path: "/" }];

  return (
    <div>
      <HeaderTwo title="RESEARCH PAPER" breadcrumbPath={breadcrumbPath} />
      <Container maxWidth="md" sx={{ marginTop: "40px" }}>
        <Box
          component="form"
          onSubmit={(e) => handleSearch(e, doiNumber)}
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
          <Button variant="contained" color="primary" type="submit">
            Search
          </Button>
        </Box>

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
            {paperRequests.map((request) => (
              <RequestLink
                key={request.id}
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
