import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  CardActions,
} from "@mui/material";
import MyButton from "../../Components/Button/MyButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CardTwo = () => {
  return (
    <Card
      sx={{
        maxWidth: 360,
        p: 3,
        borderRadius: 4,
        maxHeight: 320,
        boxShadow: "0px 0px 4px 0px rgba(84, 191, 193, 1)",
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Avatar alt="Rems Sharp" src="../../assets/cardAvatar.png" />
          <Box>
            <Typography>Lina</Typography>
            <Typography
              sx={{ fontSize: "16px", color: "rgba(105, 105, 132, 1)" }}
            >
              Note: Is a class-based object
            </Typography>
          </Box>
        </Box>

        <Typography gutterBottom variant="h5" sx={{ mt: 2 }} component="div">
          Why Java is best programming language University Name
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Note: Is a class-based object-oriented simple programming language.
          Though we can not consider it to be fully ...
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 0, mt: 2 }}>
        <MyButton variant="primary" size="small" icon={<ArrowForwardIcon />}>
          Start Collaboration
        </MyButton>
      </CardActions>
    </Card>
  );
};

export default CardTwo;
