
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const ExpertDetailCard = ({
  name = "Jose Schnroder",
  email = "dilipshou@gmail.com",
  experience,
  imageUrl = "https://via.placeholder.com/150", // Temp Placeholder image
}) => {
  return (
    <Card
      sx={{
        width: "100%",

        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          paddingTop: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={imageUrl}
          alt={`${name}'s photo`}
          sx={{
            width: "30%",
            height: "30%",
            borderRadius: "50%",
            objectFit: "cover",
            gap: "1rem",
          }}
        />
      </Box>
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          sx={{ color: "#2c7d77", textAlign: "center" }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          <strong>Email:</strong> {email}
        </Typography>
        <Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "2rem",
            gap:"0.5rem"
          }}
        >
            <Box sx={{ display: "flex", justifyContent: "space-between"}}>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Experience:</strong> {experience}
            </Box>
        </Box>
          </Typography>
      </CardContent>
    </Card>
  );
};

export default ExpertDetailCard;
