import { Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const EventCard = () => {
  return (
    <Grid2
      container
      sx={{ backgroundColor: "white" }}
      px={4}
      py={1}
      my={3}
      borderRadius={2}
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid2 lg={3} xs={4} sm={2}>
        Item 1
      </Grid2>
      <Grid2 lg={6} xs={4} sm={4}>
        {" "}
        Item 2
      </Grid2>
      <Grid2 lg={3} xs={4} sm={2}>
        <Button  variant="contained">Book a Seat</Button>
      </Grid2>
    </Grid2>
  );
};
