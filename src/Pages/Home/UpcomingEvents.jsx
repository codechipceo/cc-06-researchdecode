import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { EventCard } from "../../Components/Cards/EventCard";

export const UpcomingEvents = () => {
    const theme  = useTheme()
      const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container
      maxWidth={"auto"}
      my={10}
      sx={{
        backgroundImage: `url(images/banner/backgroundBanner-01.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Ensure the background image covers the entire container
        backgroundPosition: "center", // Center the background image
        width: "100%",
        marginTop: "60px",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <Typography variant='h6' align='center' color={"primary"}>
        Wanna learn with group?
      </Typography>
      <Typography variant={isSmallScreen ? 'h4' :"h3"} align='center' color={"dark"}>
        Join Are Offline Upcoming Events
      </Typography>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </Container>
  );
};
