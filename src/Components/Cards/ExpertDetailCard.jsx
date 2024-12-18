/** @jsxImportSource @emotion/react */
import React from "react";
import { css, keyframes } from "@emotion/react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { FaStar } from "react-icons/fa";

const ExpertDetailCard = ({
  name = "Jose Schnroder",
  email = "dilipshou@gmail.com",
  phone = "7982-86-8045",
  ratings = 5.0,
  experience = "12 Years",
  graduated = true,
  languages = ["English", "Hindi"],
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
        <Typography variant="body2" color="text.secondary" textAlign="center">
          <strong>Phone:</strong> {phone}
        </Typography>
        <Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            marginTop: "2rem",
            gap:"0.5rem"
          }}
        >
            <Box sx={{ display: "flex", justifyContent: "space-between"}}>
              <strong>Rating:</strong>
              <Box>
                {ratings} <FaStar color="#f39c12" />
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Experience:</strong> {experience}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Graduated:</strong> {graduated ? "Yes" : "No"}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Languages:</strong> {languages.join(", ")}
            </Box>
        </Box>
          </Typography>
      </CardContent>
    </Card>
  );
};

export default ExpertDetailCard;
