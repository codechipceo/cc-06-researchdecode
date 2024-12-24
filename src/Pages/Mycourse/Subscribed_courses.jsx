import React from 'react';
import { Panel } from 'rsuite';
import CourseCard from '../../Components/CourseCard/CourseCardOne'; // Adjust the import if needed
import { useCourse } from '../../Hooks/use-course';
import Typography from '../../assets/scss/components/Typography';
import '../../assets/scss/pages/RecommendedCourses.scss'; // Import the styles

const Subscribed_courses = () => {
  const authToken = localStorage.getItem("studentToken")

  const {
    courseOfUser: courses,
    isLoading,
    isError,
  } = useCourse(5, null, null, authToken);
  

  return (
    <Panel className="recommended-courses">
      <div className="recommended-header">
        <Typography size="2xl" variant="medium">
          My Courses
        </Typography>
      </div>

      {
        courses!=null ? <div className="courses-container">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>:<div>
           <p>NO PURCHASED COURSES YET</p>  
        </div>
      }
    </Panel>
  );
};

export default Subscribed_courses;
