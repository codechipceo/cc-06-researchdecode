import React from 'react'
import { Panel } from 'rsuite';
import CourseCard from "../../../Components/CourseCard/CourseCardOne"
import { useCourse } from "../../../Hooks/use-course";
import Typography from '../../../assets/scss/components/Typography';
const RecommendedCourses = () => {
  const {
    courseData: courses,
    isCourseLoading: isLoading,
    isCourseError: isError,
  } = useCourse(5);

  return (
    <Panel className="recommended-courses">
      <div className="recommended-header">
        <Typography size={"2xl"} variant={"medium"} className={"recommended-text"}>Recommended for you</Typography>
        <a href="courses" className="see-all">
          See all
          <i className="rs-icon rs-icon-chevron-right"></i>
        </a>
      </div>

      <div className="courses-container">
        {courses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}
      </div>
    </Panel>
  )
}

export default RecommendedCourses