import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../Components/Navbar/NavbarOne";
import TypographyOne from "../../Components/Typography/TypographyOne";
import MyButton from "../../Components/Button/MyButton";
import img from "../../assets/Banner.png";
import Speak from "../../assets/Speak.png";
import Vector from "../../assets/Vector.png";
import Bulb from "../../assets/bulb.png";

import CardOne from "./CardOne";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CardTwo from "./cardTwo";

const LabsPage = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", mt: 8, lineHeight: "82px" }}
            >
              Up your <TypographyOne variant="span">skills</TypographyOne>
              <br /> to <TypographyOne variant="span">
                advance
              </TypographyOne>{" "}
              your <TypographyOne variant="span">career</TypographyOne> &
              Research path
            </Typography>
            <Box sx={{ my: 3 }}>
              <Typography variant="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 3 }}>
              {/* <MyButton
                variant="light"
                icon={<ArrowForwardIcon />}
                 styles={{ borderRadius: 5 }}
              >
                Get Started
              </MyButton> */}

              <MyButton variant="primary">Get Started</MyButton>
              <MyButton variant="secondary">Get free trial</MyButton>
            </Box>
            <List
              sx={{
                display: "flex",

                mt: 3,
                color: "rgba(29, 41, 57, 0.7)",
              }}
            >
              <ListItem
                sx={{ display: "flex", gap: 1, p: 0, fontSize: "16px" }}
              >
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    zIndex: 10,
                  }}
                  src={Speak}
                  alt=""
                />
                Public Speaking
              </ListItem>
              <ListItem
                sx={{ display: "flex", gap: 1, p: 0, fontSize: "16px" }}
              >
                {" "}
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    zIndex: 10,
                  }}
                  src={Vector}
                  alt=""
                />{" "}
                Career-Oriented
              </ListItem>
              <ListItem
                sx={{ display: "flex", gap: 1, p: 0, fontSize: "16px" }}
              >
                {" "}
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    zIndex: 10,
                  }}
                  src={Bulb}
                  alt=""
                />{" "}
                Creative Thinking
              </ListItem>
            </List>
          </Box>
          <Box sx={{ flex: 1 }}>
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                zIndex: 10,
              }}
              src={img}
              alt=""
            />
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          p: 3,
          mb: 2,
          background: "rgba(196, 252, 253, 0.4)",
          display: "flex",
          gap: 2,
        }}
      >
        <CardOne />
        <CardTwo />
      </Box>
    </>
  );
};

export default LabsPage;
