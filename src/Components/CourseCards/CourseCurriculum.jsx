import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CourseCurriculum = ({course}) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Curriculum
      </Typography>
      {course && course.map((section, i) => {
        const { videoTitle, } =section
        return (
          <Accordion key={section._id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Lecture Number {i + 1}</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography variant='body1' color={"text.secondary"}> {videoTitle}</Typography>
            </AccordionDetails>
          </Accordion>
        );})}
    </Box>
  );
};

export default CourseCurriculum;