import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
} from "@mui/material";
import cardGirl from "../../assets/cardGirl.png";
import TypographyOne from "../../Components/Typography/TypographyOne";

const CardOne = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        p: 3,
        borderRadius: 4,
      }}
    >
      <CardMedia
        sx={{ height: 220, borderRadius: 4 }}
        image={cardGirl}
        title="green iguana"
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "rgba(105, 105, 132, 1)",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>Design</Typography>
          <Typography sx={{ fontSize: "14px" }}>3 Month</Typography>
        </Box>
        <Typography gutterBottom variant="h5" sx={{ mt: 1 }} component="div">
          AWS Certified solutions Architect
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Avatar alt="Rems Sharp" src="../../assets/cardAvatar.png" />{" "}
            <span>Lina</span>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                textDecoration: "line-through",
                color: "rgba(0, 0, 0, 0.5)",
              }}
            >
              100
            </Typography>
            <TypographyOne>80</TypographyOne>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardOne;
