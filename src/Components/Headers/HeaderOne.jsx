import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ResponsiveAppBar from "../Navbar/Navbar";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const HeaderOne = () => {
  return (
    <div
      style={{
        backgroundImage: "url(images/banner/backgroundBanner-01.jpg",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Ensure the background image covers the entire container
        backgroundPosition: "center", // Center the background image
        width: "100%",
      }}
    >
      <ResponsiveAppBar />
      <Container>
        <Grid2 container columns={{ xs: 1, sm: 1, md: 2 }}>
          <Grid2
            item
            xs={2}
            sm={2}
            md={1}
            alignContent={"center"}
            minHeight={"100vh"}
          >
            <LeftComponent />
          </Grid2>

          <Grid2 item xs={6} sm={12} md={1}>
            <RightComponent />
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

const LeftComponent = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant='h4' align='left'>
        From Students, For Students
      </Typography>
      <Typography variant='h2' align='left' fontWeight={"bold"} my={5}>
        For PHD students to help each other out
      </Typography>
      <Button
        onClick={() => navigate("/signup")}
        color='primary'
        variant='contained'
      >
        {" "}
        Join Today
      </Button>
    </Box>
  );
};

const RightComponent = () => {
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
