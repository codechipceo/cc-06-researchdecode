import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const AboutOne = () => {
  return (
    <>
      <Container maxWidth={"auto"}>
        <Grid2 container columns={{ xs: 1, sm: 1, md: 2 }}>
          <Grid2 item xs={2} sm={2} md={1}>
          
          </Grid2>

          <Grid2 item xs={2} sm={2} md={1}>
            <RightComponent />
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
};

const RightComponent = () => {
  return (
    <Box>
      <Typography variant='h6' align='left'>
        About Us
      </Typography>
      <Typography variant='h4' align='justify' fontWeight={"bold"} my={1}>
        A Community of Student & Experts to help each other out
      </Typography>
    </Box>
  );
};

const LeftComponent = () => {
  return (
    <Box sx={{ overflow: "hidden", position: "relative", height: "100vh" }}>
      <img
        src='/images/banner/bannerProfile-01.png'
        alt=''
        style={{ width: "100%", height: "auto" }}
      />
    </Box>
  );
};
