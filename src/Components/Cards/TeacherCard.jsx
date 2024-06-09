import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export const TeacherCard = () => {
  return (
    <Card sx={{ maxWidth: 345, width:300 }}>
      <CardMedia
        component='img'
        alt='green iguana'
        height='200'
        image='https://eduvibe.react.devsvibe.com/images/course/course-01/course-01.jpg'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Lizard
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
};
