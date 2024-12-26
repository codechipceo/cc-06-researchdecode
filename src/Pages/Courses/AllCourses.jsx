import React from 'react';
import { Panel } from 'rsuite';
import CourseCard from '../../Components/CourseCard/CourseCardOne'; // Adjust the import if needed
import { useCourse } from '../../Hooks/use-course';
import Typography from '../../assets/scss/components/Typography';
import '../../assets/scss/pages/RecommendedCourses.scss'; // Import the styles

const AllCourses = () => {
  const {
    courseData: courses,
    isLoading,
    isError,
  } = useCourse(5);

  return (
    <Panel className="recommended-courses">
      <div className="recommended-header">
        <Typography size="2xl" variant="medium">
          All Courses
        </Typography>
      </div>

      <div className="courses-container">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </Panel>
  );
};

export default AllCourses;
