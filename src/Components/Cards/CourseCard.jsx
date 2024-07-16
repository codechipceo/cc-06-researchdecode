import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

export const CourseCard = ({ course }) => {
  console.log("Each Course", course);
  const navigate = useNavigate();

  if (!course) {
    return null; // Return null if course is undefined
  }

  const { courseName, courseThumbnail, lessons, instructor, price, _id } =
    course ?? {};
  return (
    <Box onClick={() => navigate(`/course/${_id}`)}>
      <Card
        sx={{
          maxWidth: 345,
        }}
      >
        <CardMedia
          component='img'
          alt={courseName}
          height='250'
          style={{ objectFit: "fill" }}
          image={courseThumbnail}
        />
        {/* <div style={{ position: "absolute", top: "10px", right: "10px" }}>
          <IconButton size='small'>
            <FavoriteBorderIcon />
          </IconButton>
        </div> */}
        <CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <img
                src={instructorImage}
                alt='Instructor'
                style={{ width: "30px", borderRadius: "50%" }}
              /> */}
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{ marginLeft: "10px" }}
              >
                {instructor?.name}
              </Typography>
            </div>
            <Typography variant='body2' color='text.secondary'>
              Lessons {lessons ?? 0}
            </Typography>
          </div>
          <Typography variant='h6' component='div' sx={{ marginTop: "10px" }}>
            {courseName}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <div>
              <Typography variant='body1' color='text.primary'>
                ${price}
              </Typography>
              {/* {oldPrice && (
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ textDecoration: "line-through" }}
                >
                  ${oldPrice}
                </Typography>
              )} */}
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <div style={{ display: "flex", color: "#FFD700" }}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div> */}
              {/* <Typography
                variant='body2'
                color='text.secondary'
                sx={{ marginLeft: "5px" }}
              >
                ({rating})
              </Typography> */}
            </div>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};
