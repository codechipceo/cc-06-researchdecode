import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import Props from 'prop-types'

export const TeacherCard = ({ data }) => {
  const { profileImage, experience, name, qualification } = data;
  return (
    <Card sx={{ maxWidth: 345, minWidth: 300 }}>
      <CardMedia
        component='img'
        alt='green iguana'
        height='200'
        image={
          profileImage
            ? profileImage
            : "https://eduvibe.react.devsvibe.com/images/course/course-01/course-01.jpg"
        }
      />
      <CardContent>
        <Box display={"flex"}>
          <Typography gutterBottom variant='h5' component='div' flexGrow={1}>
            {name}
          </Typography>
          <Box>
            <Typography
              gutterBottom
              variant='body2'
              component='div'
              color={"text.secondary"}
            >
              Qualifitcation:{qualification}
            </Typography>
            <Typography
              gutterBottom
              variant='body2'
              component='div'
              color={"text.secondary"}
            >
              Experience: {experience}
            </Typography>
          </Box>
        </Box>
        {/* <Typography variant='body2' color='text.secondary'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size='small' fullWidth variant='contained' onClick={() => {}}>
          Hire Expert
        </Button>
      </CardActions>
    </Card>
  );
};

TeacherCard.propTypes = {
  data:Props.object
}