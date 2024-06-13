import React from "react";
import ResponsiveAppBar from "../Navbar/Navbar";
import { Breadcrumbs, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const HeaderTwo = ({ title, breadcrumbPath }) => {
  const bannerStyle = {
    backgroundImage: "url(images/banner/backgroundBanner-01.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "60px",
    paddingBottom: "50px",
    width: "100%",
    marginBottom: "80px",
  };

  const navigate = useNavigate();

  return (
    <div>
      <ResponsiveAppBar />
      <Container maxWidth={false} sx={bannerStyle}>
        <Typography variant="h2" align="left" fontWeight={"bold"} my={5}>
          {title}
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          {breadcrumbPath.map((crumb, index) => (
            <Button
              key={index}
              color="inherit"
              onClick={() => navigate(crumb.path)}
            >
              {crumb.label}
            </Button>
          ))}
          <Typography color="textPrimary">{title}</Typography>
        </Breadcrumbs>
      </Container>
    </div>
  );
};
