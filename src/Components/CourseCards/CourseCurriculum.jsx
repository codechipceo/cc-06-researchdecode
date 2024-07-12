import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CourseCurriculum = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Curriculum
      </Typography>
      {[1, 2, 3].map((section) => (
        <Accordion key={section}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Section {section}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Details for section {section}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default CourseCurriculum;