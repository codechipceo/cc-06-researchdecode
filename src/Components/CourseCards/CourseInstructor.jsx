import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

const CourseInstructor = ({ course }) => {
  console.log("Instructor", course);
  const { name, qualification, experience } = course?.instructor;
  const teacherInfo = { name, qualification, experience };
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant='h6' gutterBottom>
        Instructor
      </Typography>
      <Avatar alt={name} sx={{ width: 100, height: 100, mb: 2 }} />
      <Typography variant='h6'>{name}</Typography>
      {Object.keys(teacherInfo).map((item) => {
        return (
          <Box
            key={item}
            display={"flex"}
            gap={3}
            justifyContent={"space-between"}
            maxWidth={250}
          >
            <Typography variant='body1'> {item}</Typography>
            <Typography variant='body2' color={"GrayText"}>
              {" "}
              {teacherInfo[item]}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default CourseInstructor;
